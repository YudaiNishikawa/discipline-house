import { useMemo } from 'react';
import { calculateLevel, calculateProgress, calculateTotalPoints } from '../utils/levelCalculator';
import type { LevelInfo } from '../constants/levelConfig';

export interface AssetState {
  totalPoints: number;
  levelInfo: LevelInfo;
  progress: number;
  completedCount: number;
  formatPoints: (points: number) => string;
}

export function useAsset(completedCount: number): AssetState {
  const totalPoints = useMemo(() => calculateTotalPoints(completedCount), [completedCount]);

  const levelInfo = useMemo(() => calculateLevel(totalPoints), [totalPoints]);

  const progress = useMemo(() => calculateProgress(totalPoints, levelInfo), [totalPoints, levelInfo]);

  const formatPoints = (points: number): string => {
    return points.toLocaleString();
  };

  return {
    totalPoints,
    levelInfo,
    progress,
    completedCount,
    formatPoints,
  };
}
