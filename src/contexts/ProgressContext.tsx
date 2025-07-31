import { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface ProgressContextType {
  completedItems: Set<number>;
  toggleItemCompletion: (itemNumber: number) => void;
  isItemCompleted: (itemNumber: number) => boolean;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

// Export the context so the hook can use it
export { ProgressContext };

export function ProgressProvider({ children }: { children: ReactNode }) {
  // Initialize from localStorage immediately
  const [completedItems, setCompletedItems] = useState<Set<number>>(() => {
    const saved = localStorage.getItem('apprenticeship-progress');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  // Save to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem('apprenticeship-progress', JSON.stringify([...completedItems]));
  }, [completedItems]);

  const toggleItemCompletion = (itemNumber: number) => {
    setCompletedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemNumber)) {
        newSet.delete(itemNumber);
      } else {
        newSet.add(itemNumber);
      }
      return newSet;
    });
  };

  const isItemCompleted = (itemNumber: number) => {
    return completedItems.has(itemNumber);
  };

  return (
    <ProgressContext.Provider value={{
      completedItems,
      toggleItemCompletion,
      isItemCompleted
    }}>
      {children}
    </ProgressContext.Provider>
  );
}
