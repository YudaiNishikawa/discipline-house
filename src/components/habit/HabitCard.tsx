import type { Habit } from '../../types';

interface HabitCardProps {
  habit: Habit;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function HabitCard({ habit, onToggle, onDelete }: HabitCardProps) {
  return (
    <div
      className={`rounded-2xl p-4 shadow-md transition-all duration-200 ${
        habit.completed
          ? 'bg-[var(--accent-bg)] border-2 border-[var(--accent-border)]'
          : 'bg-[var(--social-bg)] border-2 border-transparent'
      }`}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-medium text-[var(--text-h)]">{habit.name}</h3>
            <button
              type="button"
              onClick={() => onDelete(habit.id)}
              className="rounded-full px-2 py-1 text-xs text-[var(--text)] hover:text-red-500 transition-colors"
              style={{ backgroundColor: 'transparent' }}
            >
              ✕
            </button>
          </div>
          <button
            type="button"
            onClick={() => onToggle(habit.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              habit.completed
                ? 'bg-pastel-green text-[var(--text-h)]'
                : 'bg-pastel-blue text-white hover:opacity-90'
            }`}
            style={{
              backgroundColor: habit.completed ? '#a7f3d0' : '#3b82f6',
            }}
          >
            {habit.completed ? 'Completed' : 'Done!'}
          </button>
        </div>
        {habit.description && (
          <p className="text-sm text-[var(--text)]">{habit.description}</p>
        )}
      </div>
    </div>
  );
}
