import { useState, useEffect, useCallback } from 'react';
import { getTodayPixels, incrementPixel, postPixel } from '../services/pixelaApi';

interface PixelaConfig {
  username: string;
  token: string;
  graphId: string;
}

interface UsePixelaReturn {
  totalPoints: number;
  isLoading: boolean;
  error: string | null;
  addPoints: (points: number) => Promise<void>;
  syncPoints: () => Promise<void>;
}

export function usePixela(config: PixelaConfig | null): UsePixelaReturn {
  const [totalPoints, setTotalPoints] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getTodayDate = () => new Date().toISOString().split('T')[0].replace(/-/g, '');

  const syncPoints = useCallback(async () => {
    if (!config) {
      setTotalPoints(0);
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      const points = await getTodayPixels(config);
      setTotalPoints(points);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to sync points');
      setTotalPoints(0);
    } finally {
      setIsLoading(false);
    }
  }, [config]);

  useEffect(() => {
    syncPoints();
  }, [syncPoints]);

  const addPoints = useCallback(
    async (points: number) => {
      if (!config) return;

      const today = getTodayDate();

      try {
        setError(null);
        const result = await incrementPixel(config, today, points.toString());

        if (result.isSuccess) {
          setTotalPoints((prev) => prev + points);
        } else {
          if (result.message?.includes('No data exists')) {
            await postPixel(config, today, points.toString());
            setTotalPoints(points);
          } else {
            setError(result.message || 'Failed to add points');
          }
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to add points');
      }
    },
    [config]
  );

  return { totalPoints, isLoading, error, addPoints, syncPoints };
}
