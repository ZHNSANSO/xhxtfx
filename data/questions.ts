
import { Question } from '../types';
import { choiceQuestions } from './choice/questions';
import { choiceAnswers } from './choice/answers';
import { blankQuestions } from './blank/questions';
import { blankAnswers } from './blank/answers';
import { judgementQuestions } from './judgement/questions';
import { judgementAnswers } from './judgement/answers';

// Merge Data
export const questions: Question[] = [
  ...choiceQuestions.map(q => ({
    ...q,
    ...choiceAnswers[q.id]
  })),
  ...blankQuestions.map(q => ({
    ...q,
    ...blankAnswers[q.id]
  })),
  ...judgementQuestions.map(q => ({
    ...q,
    ...judgementAnswers[q.id]
  }))
];
