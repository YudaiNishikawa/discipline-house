import { HabitList } from './components/habit/HabitList';
import { AddHabitForm } from './components/habit/AddHabitForm';
import { Dashboard } from './components/dashboard/Dashboard';
import { useHabit } from './hooks/useHabit';
import { useAsset } from './hooks/useAsset';

function App() {
  const { habits, toggleHabit, addHabit, deleteHabit } = useHabit();
  const completedCount = habits.filter((h) => h.completed).length;
  const { totalPoints, levelInfo, progress, formatPoints } = useAsset(completedCount);

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
          <HabitList habits={habits} onToggle={toggleHabit} onDelete={deleteHabit} />
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
