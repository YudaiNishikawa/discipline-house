import { useState, useCallback } from 'react';
import type { Habit, HabitState } from '../types';

const INITIAL_HABITS: Habit[] = [
  { id: '1', name: '早起き', description: '7時に起きる', completed: false },
  { id: '2', name: '筋トレ', description: 'ジムに行く', completed: false },
  { id: '3', name: '勉強', description: '3時間以上の学習', completed: false },
  { id: '4', name: '水を飲む', description: '2L以上の水分補給', completed: false },
];

export function useHabit(): HabitState {
  const [habits, setHabits] = useState<Habit[]>(INITIAL_HABITS);

  const toggleHabit = useCallback((id: string) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === id
          ? { ...habit, completed: !habit.completed, completedAt: !habit.completed ? new Date() : undefined }
          : habit
      )
    );
  }, []);

  const addHabit = useCallback((name: string, description?: string) => {
    const newHabit: Habit = {
      id: Date.now().toString(),
      name,
      description,
      completed: false,
    };
    setHabits((prev) => [...prev, newHabit]);
  }, []);

  const deleteHabit = useCallback((id: string) => {
    setHabits((prev) => prev.filter((habit) => habit.id !== id));
  }, []);

  const resetDaily = useCallback(() => {
    setHabits((prev) =>
      prev.map((habit) => ({ ...habit, completed: false, completedAt: undefined }))
    );
  }, []);

  const setCompletedCount = useCallback((count: number) => {
    const newCompleted = count % habits.length;

    setHabits((prev) =>
      prev.map((habit, index) => ({
        ...habit,
        completed: index < newCompleted,
        completedAt: index < newCompleted ? new Date() : undefined,
      }))
    );
  }, [habits.length]);

  return { habits, toggleHabit, addHabit, deleteHabit, resetDaily, setCompletedCount };
}
