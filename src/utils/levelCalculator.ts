import { LEVEL_CONFIG } from '../constants/levelConfig';
import type { LevelInfo } from '../constants/levelConfig';

export function calculateLevel(totalPoints: number): LevelInfo {
  if (totalPoints >= LEVEL_CONFIG[LEVEL_CONFIG.length - 1].threshold) {
    return LEVEL_CONFIG[LEVEL_CONFIG.length - 1];
  }

  for (let i = 0; i < LEVEL_CONFIG.length - 1; i++) {
    const current = LEVEL_CONFIG[i];
    const next = LEVEL_CONFIG[i + 1];
    if (totalPoints >= current.threshold && totalPoints < next.threshold) {
      return current;
    }
  }

  return LEVEL_CONFIG[0];
}

export function calculateProgress(totalPoints: number, currentLevel: LevelInfo): number {
  if (currentLevel.nextThreshold === Infinity) {
    return 100;
  }

  const progress = ((totalPoints - currentLevel.threshold) /
    (currentLevel.nextThreshold - currentLevel.threshold)) * 100;

  return Math.min(Math.max(progress, 0), 100);
}

export function calculateTotalPoints(completedCount: number): number {
  return completedCount * 100;
}
