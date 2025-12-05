
import React, { useState, useEffect, useRef } from 'react';
import { Question } from '../types';
import MathText from './MathText';

interface QuestionCardProps {
  question: Question;
  selectedOptionId?: string;
  onSelect: (questionId: number, optionId: string) => void;
  isFavorite: boolean;
  onToggleFavorite: (questionId: number) => void;
  showResult?: boolean;
  selectionMode: boolean;
  isSelected: boolean;
  onToggleSelection: (questionId: number) => void;
  onLongPress: (questionId: number) => void;
  isInWrongList?: boolean;
  onRemoveFromWrong?: (questionId: number) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedOptionId,
  onSelect,
  isFavorite,
  onToggleFavorite,
  showResult = false,
  selectionMode,
  isSelected,
  onToggleSelection,
  onLongPress,
  isInWrongList = false,
  onRemoveFromWrong
}) => {
  const isChoice = question.type === 'choice';
  const isJudgement = question.type === 'judgement';
  
  // Logic for correctness
  let isCorrect = false;
  if (isChoice || isJudgement) {
    isCorrect = selectedOptionId === question.correctOptionId;
  } else {
    // For blank questions
    isCorrect = selectedOptionId === 'CORRECT';
  }

  const [showExplanation, setShowExplanation] = useState(false);
  // For blank questions: state to control answer reveal
  const [blankRevealed, setBlankRevealed] = useState(false);
  
  const pressTimer = useRef<number | null>(null);

  // Reset states when question changes
  useEffect(() => {
    if (!showResult) {
      setShowExplanation(false);
      setBlankRevealed(false);
    } else if (!isChoice && !isJudgement) {
      // If result is shown for blank (page reload), reveal it
      setBlankRevealed(true);
    }
  }, [showResult, question.id, isChoice, isJudgement]);

  const handlePointerDown = () => {
    if (!selectionMode) {
      pressTimer.current = window.setTimeout(() => {
        onLongPress(question.id);
      }, 500); // 500ms for long press
    }
  };

  const handlePointerUp = () => {
    if (pressTimer.current) {
      clearTimeout(pressTimer.current);
      pressTimer.current = null;
    }
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if (selectionMode) {
      e.stopPropagation(); // Prevent other interactions
      onToggleSelection(question.id);
    }
  };

  const handleBlankReveal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setBlankRevealed(true);
    setShowExplanation(true);
  };

  const handleBlankGrade = (e: React.MouseEvent, grade: 'CORRECT' | 'WRONG') => {
    e.stopPropagation();
    onSelect(question.id, grade);
  };

  const handleJudgementSelect = (e: React.MouseEvent, value: 'true' | 'false') => {
    if (selectionMode) return;
    if (!showResult) {
      e.stopPropagation();
      onSelect(question.id, value);
    }
  };

  const getTypeLabel = () => {
    switch (question.type) {
      case 'choice': return '选择题';
      case 'blank': return '填空题';
      case 'judgement': return '判断题';
      default: return '题目';
    }
  };

  const getTypeColor = () => {
    switch (question.type) {
      case 'choice': return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300';
      case 'blank': return 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300';
      case 'judgement': return 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div 
      className={`relative bg-white dark:bg-slate-800 rounded-lg shadow-sm border p-6 mb-4 transition-all select-none ${
        isSelected 
          ? 'border-blue-500 ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-900/10' 
          : 'border-slate-200 dark:border-slate-700'
      }`}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onClick={handleCardClick}
    >
      {/* Selection Checkbox Overlay */}
      {selectionMode && (
        <div className="absolute top-4 right-4 z-10 pointer-events-none">
          <div className={`w-6 h-6 rounded border flex items-center justify-center transition-colors ${
            isSelected ? 'bg-blue-500 border-blue-500' : 'bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-500'
          }`}>
            {isSelected && (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </div>
        </div>
      )}

      {/* Question Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="text-lg font-medium text-slate-800 dark:text-slate-100 flex-1 mr-8">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-primary font-bold">{question.id}.</span>
            <span className={`text-xs px-2 py-0.5 rounded ${getTypeColor()}`}>
              {getTypeLabel()}
            </span>
          </div>
          <MathText text={question.content} />
        </div>
        {!selectionMode && (
          <button
            onClick={(e) => { e.stopPropagation(); onToggleFavorite(question.id); }}
            className={`p-2 rounded-full transition-colors ${
              isFavorite ? 'text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20' : 'text-slate-300 hover:text-slate-400'
            }`}
            aria-label="收藏"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={isFavorite ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.603 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </button>
        )}
      </div>

      {/* --- CHOICE QUESTION INTERFACE --- */}
      {isChoice && question.options && (
        <div className="space-y-3">
          {question.options.map((option) => {
            let optionStyle = "border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50";
            
            if (selectedOptionId === option.id) {
               optionStyle = "border-primary bg-blue-50 dark:bg-blue-900/20 text-primary";
               if (showResult && !isCorrect) {
                 optionStyle = "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-600";
               }
            }
            
            if (showResult && option.id === question.correctOptionId) {
              optionStyle = "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-600";
            }

            return (
              <div
                key={option.id}
                onClick={(e) => {
                  if (selectionMode) return;
                  if (!showResult) {
                    e.stopPropagation();
                    onSelect(question.id, option.id);
                  }
                }}
                className={`flex items-center p-3 border rounded-md cursor-pointer transition-colors ${optionStyle}`}
              >
                <div className={`w-8 h-8 flex items-center justify-center rounded-full border mr-3 text-sm font-bold shrink-0 ${
                  selectedOptionId === option.id || (showResult && option.id === question.correctOptionId)
                    ? 'border-current' 
                    : 'border-slate-300 text-slate-500'
                }`}>
                  {option.label}
                </div>
                <div className="text-sm md:text-base flex-1">
                  <MathText text={option.content} />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* --- JUDGEMENT QUESTION INTERFACE --- */}
      {isJudgement && (
        <div className="flex gap-4 my-4">
          {['true', 'false'].map((val) => {
            const isSelected = selectedOptionId === val;
            const isCorrectOption = question.correctOptionId === val;
            const label = val === 'true' ? '正确 (对)' : '错误 (错)';
            const icon = val === 'true' ? '✓' : '✕';
            
            let btnClass = "border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700";
            
            if (isSelected) {
              btnClass = "border-primary bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 ring-1 ring-blue-500";
              if (showResult && !isCorrect) {
                btnClass = "border-red-500 bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300 ring-1 ring-red-500";
              }
            }
            
            if (showResult && isCorrectOption) {
              btnClass = "border-green-500 bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300 ring-1 ring-green-500";
            }

            return (
              <button
                key={val}
                onClick={(e) => handleJudgementSelect(e, val as 'true' | 'false')}
                disabled={showResult}
                className={`flex-1 py-4 px-6 rounded-lg border-2 font-bold text-lg flex items-center justify-center gap-3 transition-all ${btnClass}`}
              >
                <span className="text-2xl">{icon}</span>
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* --- FILL IN BLANK INTERFACE --- */}
      {!isChoice && !isJudgement && (
        <div className="space-y-4 my-4">
          {!blankRevealed ? (
            <div className="flex flex-col gap-3">
              <div className="p-4 bg-slate-50 dark:bg-slate-700/30 rounded border border-dashed border-slate-300 dark:border-slate-600 text-center text-slate-500 dark:text-slate-400">
                请在纸上或心中作答
              </div>
              <button 
                onClick={handleBlankReveal}
                className="w-full py-2.5 bg-primary text-white font-medium rounded-md hover:bg-blue-600 transition-colors shadow-sm"
              >
                查看答案 & 解析
              </button>
            </div>
          ) : (
             <div className="space-y-3 animate-fadeIn">
               <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
                 <div className="text-xs text-green-600 dark:text-green-400 font-bold uppercase mb-1">正确答案</div>
                 <div className="text-lg text-slate-900 dark:text-white font-medium">
                   <MathText text={question.correctOptionId} />
                 </div>
               </div>
               
               {!showResult && (
                 <div className="flex gap-3 mt-2">
                   <button 
                     onClick={(e) => handleBlankGrade(e, 'CORRECT')}
                     className="flex-1 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm font-medium transition-colors"
                   >
                     我答对了
                   </button>
                   <button 
                     onClick={(e) => handleBlankGrade(e, 'WRONG')}
                     className="flex-1 py-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 rounded-md text-sm font-medium transition-colors"
                   >
                     我答错了
                   </button>
                 </div>
               )}
             </div>
          )}
        </div>
      )}

      {/* Result & Explanation */}
      {showResult && (
        <div className="mt-4 animate-fadeIn">
          {/* Result Header */}
          <div className={`p-4 rounded-lg flex flex-col sm:flex-row justify-between items-center gap-3 ${
            isCorrect ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
          }`}>
            <div className="flex items-center font-bold">
              {isCorrect ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span>{isChoice || isJudgement ? '回答正确' : '已掌握'}</span>
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
                  <span>{isChoice || isJudgement ? (isJudgement ? `正确答案: ${question.correctOptionId === 'true' ? '正确' : '错误'}` : `正确答案: ${question.correctOptionId}`) : '需复习'}</span>
                </>
              )}
            </div>
            
            <div className="flex gap-2 w-full sm:w-auto">
              {!selectionMode && isInWrongList && onRemoveFromWrong && (
                 <button
                   onClick={(e) => { e.stopPropagation(); onRemoveFromWrong(question.id); }}
                   className="px-3 py-2 bg-green-600 text-white rounded-md shadow-sm text-sm font-medium hover:bg-green-700 focus:outline-none transition-colors flex items-center justify-center flex-1 sm:flex-initial"
                 >
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                   </svg>
                   已学会
                 </button>
              )}
              <button 
                onClick={(e) => { e.stopPropagation(); setShowExplanation(!showExplanation); }}
                className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all flex-1 sm:flex-initial flex items-center justify-center"
              >
                {showExplanation ? '收起解析' : '查看解析'}
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-1 transform transition-transform ${showExplanation ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          {showExplanation && (
            <div className="mt-4 p-5 bg-slate-50 dark:bg-slate-700/30 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 animate-fadeIn cursor-text" onClick={e => e.stopPropagation()}>
              <div className="font-bold text-lg mb-3 flex items-center border-b border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-xl mr-2">💡</span> 解题思路与步骤
              </div>
              <div className="whitespace-pre-line leading-relaxed text-base">
                <MathText text={question.explanation} block />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
