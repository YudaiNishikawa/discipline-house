export interface Habit {
  id: string;
  name: string;
  description?: string;
  completed: boolean;
  completedAt?: Date;
}

export interface HabitState {
  habits: Habit[];
  toggleHabit: (id: string) => void;
  addHabit: (name: string, description?: string) => void;
  deleteHabit: (id: string) => void;
  resetDaily: () => void;
}
