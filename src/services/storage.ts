const STORAGE_KEY = 'discipline-house-points';

export function getStoredPoints(): number {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? parseInt(stored, 10) : 0;
}

export function setStoredPoints(points: number): void {
  localStorage.setItem(STORAGE_KEY, points.toString());
}

export function addPoints(points: number): number {
  const current = getStoredPoints();
  const newTotal = current + points;
  setStoredPoints(newTotal);
  return newTotal;
}

export function subtractPoints(points: number): number {
  const current = getStoredPoints();
  const newTotal = Math.max(0, current - points);
  setStoredPoints(newTotal);
  return newTotal;
}
