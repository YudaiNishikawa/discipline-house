import { useState, useCallback } from 'react';
import { getStoredPoints, setStoredPoints } from '../services/storage';

interface UseStorageReturn {
  totalPoints: number;
  addPoints: (points: number) => void;
}

export function useStorage(): UseStorageReturn {
  const [totalPoints, setTotalPoints] = useState(() => getStoredPoints());

  const addPoints = useCallback((points: number) => {
    setTotalPoints((prev) => {
      const newTotal = prev + points;
      setStoredPoints(newTotal);
      return newTotal;
    });
  }, []);

  return { totalPoints, addPoints };
}
