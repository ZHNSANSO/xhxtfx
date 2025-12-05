
import React, { useState, useEffect, useMemo } from 'react';
import { questions } from './data/questions';
import QuestionCard from './components/QuestionCard';
import { AppState, FilterType, QuestionType } from './types';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [state, setState] = useState<AppState>(() => {
    const saved = localStorage.getItem('signals-app-state');
    return saved ? JSON.parse(saved) : { answers: {}, favorites: [], wrongIds: [] };
  });
  
  const [filter, setFilter] = useState<FilterType>('all');
  const [typeFilter, setTypeFilter] = useState<QuestionType | 'all'>('all');
  const [search, setSearch] = useState('');
  
  // Selection Mode State
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());

  // Handle Dark Mode
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Persist State
  useEffect(() => {
    localStorage.setItem('signals-app-state', JSON.stringify(state));
  }, [state]);

  const handleSelectAnswer = (questionId: number, optionId: string) => {
    const question = questions.find(q => q.id === questionId);
    if (!question) return;

    let isCorrect = false;
    if (question.type === 'choice' || question.type === 'judgement') {
      isCorrect = optionId === question.correctOptionId;
    } else {
      // For blank
      isCorrect = optionId === 'CORRECT';
    }
    
    setState(prev => {
      const newWrongIds = isCorrect 
        ? prev.wrongIds.filter(id => id !== questionId) // Remove if correct
        : Array.from(new Set([...prev.wrongIds, questionId])); // Add if wrong

      return {
        ...prev,
        answers: { ...prev.answers, [questionId]: optionId },
        wrongIds: newWrongIds
      };
    });
  };

  const toggleFavorite = (questionId: number) => {
    setState(prev => ({
      ...prev,
      favorites: prev.favorites.includes(questionId)
        ? prev.favorites.filter(id => id !== questionId)
        : [...prev.favorites, questionId]
    }));
  };

  // Selection Logic
  const handleLongPress = (questionId: number) => {
    // Constraint Check: Long press ONLY takes effect in wrong or favorites lists
    if (filter === 'all') return;

    setSelectionMode(true);
    setSelectedItems(new Set([questionId]));
  };

  const toggleSelection = (questionId: number) => {
    setSelectedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
      }
      return newSet;
    });
  };

  const exitSelectionMode = () => {
    setSelectionMode(false);
    setSelectedItems(new Set());
  };

  const selectAll = () => {
    const ids = filteredQuestions.map(q => q.id);
    setSelectedItems(new Set(ids));
  };

  const removeFromList = () => {
    if (filter === 'wrong') {
      // Logic Update: When removing from wrong list via batch action, also reset the answer status
      setState(prev => {
        const newAnswers = { ...prev.answers };
        selectedItems.forEach(id => {
          delete newAnswers[id];
        });
        return {
          ...prev,
          answers: newAnswers,
          wrongIds: prev.wrongIds.filter(id => !selectedItems.has(id))
        };
      });
    } else if (filter === 'favorites') {
      setState(prev => ({
        ...prev,
        favorites: prev.favorites.filter(id => !selectedItems.has(id))
      }));
    }
    exitSelectionMode();
  };
  
  const removeIndividualFromWrong = (questionId: number) => {
     // Logic Update: When marking as learned (removing from wrong list), reset the answer status
     setState(prev => {
        const newAnswers = { ...prev.answers };
        delete newAnswers[questionId];
        return {
          ...prev,
          answers: newAnswers,
          wrongIds: prev.wrongIds.filter(id => id !== questionId)
        };
     });
  };

  const resetProgress = () => {
    if (window.confirm('确定要重置所有学习进度吗？\n\n此操作将清空所有答题记录、错题集和收藏，无法撤销。')) {
      setState({ answers: {}, favorites: [], wrongIds: [] });
      setFilter('all');
      setSelectionMode(false);
      // Explicitly clear local storage to be safe, though useEffect handles it
      localStorage.removeItem('signals-app-state');
    }
  };

  const filteredQuestions = useMemo(() => {
    return questions.filter(q => {
      // 1. Search Filter
      const matchesSearch = q.content.toLowerCase().includes(search.toLowerCase());
      if (!matchesSearch) return false;

      // 2. Tab Filter (All/Wrong/Favorites)
      if (filter === 'favorites' && !state.favorites.includes(q.id)) return false;
      if (filter === 'wrong' && !state.wrongIds.includes(q.id)) return false;

      // 3. Type Filter (Choice/Blank/Judgement)
      if (typeFilter !== 'all' && q.type !== typeFilter) return false;

      return true;
    });
  }, [filter, typeFilter, search, state.favorites, state.wrongIds]);

  const progress = Math.round((Object.keys(state.answers).length / questions.length) * 100);

  return (
    <div className="min-h-screen pb-24 bg-gray-50 dark:bg-slate-900 transition-colors duration-200">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 py-3 flex justify-between items-center">
          {selectionMode ? (
            <div className="flex items-center w-full justify-between">
              <div className="flex items-center space-x-4">
                <button onClick={exitSelectionMode} className="text-slate-600 dark:text-slate-300 font-medium">取消</button>
                <span className="font-bold text-slate-800 dark:text-white">已选择 {selectedItems.size} 项</span>
              </div>
              <button onClick={selectAll} className="text-primary font-medium">全选</button>
            </div>
          ) : (
            <>
              <div>
                <h1 className="text-xl font-bold text-slate-900 dark:text-white">信号与系统复习</h1>
                <p className="text-xs text-slate-500 dark:text-slate-400">共 {questions.length} 题 · 进度 {progress}%</p>
              </div>
              <div className="flex items-center space-x-2">
                 <button
                  onClick={resetProgress}
                  title="重置进度"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                </button>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  title="切换模式"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  {darkMode ? (
                    /* Simple Moon Icon */
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                  ) : (
                    /* Simple Sun Icon */
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h1a1 1 0 100 2h-1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 pt-6">
        {/* Controls */}
        <div className="mb-6 space-y-4">
          <input
            type="text"
            placeholder="搜索题目关键词..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            disabled={selectionMode}
            className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:outline-none disabled:opacity-50"
          />
          
          {/* Main Filter Tabs */}
          <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
            {[
              { id: 'all', label: '全部题目' },
              { id: 'wrong', label: `错题集 (${state.wrongIds.length})` },
              { id: 'favorites', label: `收藏 (${state.favorites.length})` },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as FilterType)}
                disabled={selectionMode}
                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  filter === tab.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Type Filter Dropdown/Select */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-slate-500 dark:text-slate-400">题型筛选:</span>
            <select
               value={typeFilter}
               onChange={(e) => setTypeFilter(e.target.value as QuestionType | 'all')}
               disabled={selectionMode}
               className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm focus:ring-1 focus:ring-primary focus:outline-none"
            >
              <option value="all">所有题型</option>
              <option value="choice">选择题</option>
              <option value="blank">填空题</option>
              <option value="judgement">判断题</option>
            </select>
          </div>
        </div>

        {/* List */}
        <div className="space-y-4">
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map(q => (
              <QuestionCard
                key={q.id}
                question={q}
                selectedOptionId={state.answers[q.id]}
                onSelect={handleSelectAnswer}
                isFavorite={state.favorites.includes(q.id)}
                onToggleFavorite={toggleFavorite}
                showResult={!!state.answers[q.id]}
                selectionMode={selectionMode}
                isSelected={selectedItems.has(q.id)}
                onToggleSelection={toggleSelection}
                onLongPress={handleLongPress}
                isInWrongList={state.wrongIds.includes(q.id)}
                onRemoveFromWrong={removeIndividualFromWrong}
              />
            ))
          ) : (
            <div className="text-center py-12 text-slate-500 dark:text-slate-400">
              <div className="text-4xl mb-3">📝</div>
              <p>没有找到题目</p>
            </div>
          )}
        </div>
      </main>

      {/* Batch Actions Footer */}
      {selectionMode && (filter === 'wrong' || filter === 'favorites') && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-lg z-30 animate-slideUp">
          <div className="max-w-3xl mx-auto flex justify-between items-center">
            <span className="text-sm text-slate-500 dark:text-slate-400">已选 {selectedItems.size} 项</span>
            <button 
              onClick={removeFromList}
              disabled={selectedItems.size === 0}
              className="px-6 py-2 bg-red-500 text-white rounded-lg font-medium shadow-sm hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {filter === 'wrong' ? '移出错题集（重置）' : '取消收藏'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
