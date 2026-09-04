import type { Habit } from '../../types';
import { HabitCard } from './HabitCard';

interface HabitListProps {
  habits: Habit[];
  onToggle: (id: string) => void;
}

export function HabitList({ habits, onToggle }: HabitListProps) {
  return (
    <div className="flex flex-col gap-3">
      {habits.map((habit) => (
        <HabitCard key={habit.id} habit={habit} onToggle={onToggle} />
      ))}
    </div>
  );
}
