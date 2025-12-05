
export interface Option {
  id: string;
  label: string; // "A", "B", "C", "D"
  content: string; // LaTeX supported text
}

export type QuestionType = 'choice' | 'blank' | 'judgement';

export interface Question {
  id: number;
  type: QuestionType; // New field
  content: string; // LaTeX supported text
  options?: Option[]; // Optional for blank questions
  correctOptionId: string; // For blank, this is the LaTeX answer; For judgement, "true" or "false"
  explanation: string; // Detailed analysis with LaTeX
  difficulty?: number;
}

export type FilterType = 'all' | 'wrong' | 'favorites';

export interface AppState {
  answers: Record<number, string>; // questionId -> optionId (or "CORRECT"/"WRONG" for blank)
  favorites: number[]; // list of questionIds
  wrongIds: number[]; // list of questionIds answered incorrectly
}
