export const quizRegistry: Record<string, () => Promise<any>> = {
  'ch-gases': () => import('./data/chemistryGasesQuestions'),
  'ch-transition-elements': () => import('./data/chemistryTransitionQuestions'),
};
