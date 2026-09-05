import { useMemo } from 'react';
import { calculateLevel, calculateProgress } from '../utils/levelCalculator';
import type { LevelInfo } from '../constants/levelConfig';

export interface AssetState {
  totalPoints: number;
  levelInfo: LevelInfo;
  progress: number;
  completedCount: number;
  formatPoints: (points: number) => string;
}

export function useAsset(totalPoints: number): AssetState {
  const completedCount = Math.floor(totalPoints / 100);

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
