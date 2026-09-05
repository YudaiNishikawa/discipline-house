import { useCallback, useEffect } from 'react';
import { HabitList } from './components/habit/HabitList';
import { AddHabitForm } from './components/habit/AddHabitForm';
import { Dashboard } from './components/dashboard/Dashboard';
import { useHabit } from './hooks/useHabit';
import { useStorage } from './hooks/useStorage';
import { useAsset } from './hooks/useAsset';

function App() {
  const { habits, toggleHabit, addHabit, deleteHabit, setCompletedCount } = useHabit();
  const { totalPoints, addPoints } = useStorage();

  const completedCount = habits.filter((h) => h.completed).length;
  const { levelInfo, progress, formatPoints } = useAsset(totalPoints);

  useEffect(() => {
    setCompletedCount(Math.floor(totalPoints / 100));
  }, [totalPoints, setCompletedCount]);

  const handleToggle = useCallback(
    (id: string) => {
      const habit = habits.find((h) => h.id === id);
      if (!habit) return;

      if (!habit.completed) {
        addPoints(100);
      }
      toggleHabit(id);
    },
    [habits, toggleHabit, addPoints]
  );

  return (
    <div className="min-h-screen bg-[var(--bg)] p-6">
      <main className="max-w-md mx-auto">
        <Dashboard
          totalPoints={totalPoints}
          levelInfo={levelInfo}
          progress={progress}
          formatPoints={formatPoints}
        />

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[var(--text-h)] mb-4">
            今日の習慣
          </h2>
          <HabitList habits={habits} onToggle={handleToggle} onDelete={deleteHabit} />
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-medium text-[var(--text-h)] mb-3">
            新しい習慣を追加
          </h3>
          <AddHabitForm onAdd={addHabit} />
        </section>

        <section className="text-center text-sm text-[var(--text)]">
          {completedCount} / {habits.length} 達成
        </section>
      </main>
    </div>
  );
}

export default App;
