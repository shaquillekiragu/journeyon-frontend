import { useContext } from 'react';
import { ProgressContext } from '../contexts/ProgressContext';

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error(
      'useProgress hook must be used inside a ProgressProvider. ' +
      'Make sure your component is wrapped with <ProgressProvider> in App.tsx'
    );
  }
  return context;
}
