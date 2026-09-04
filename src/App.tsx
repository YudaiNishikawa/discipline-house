import { HabitList } from './components/habit/HabitList';
import { AddHabitForm } from './components/habit/AddHabitForm';
import { useHabit } from './hooks/useHabit';

function App() {
  const { habits, toggleHabit, addHabit, deleteHabit } = useHabit();

  return (
    <div className="min-h-screen bg-[var(--bg)] p-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-[var(--text-h)] mb-2">
          Discipline House
        </h1>
        <p className="text-[var(--text)]">習慣を達成して資産を蓄積しよう</p>
      </header>

      <main className="max-w-md mx-auto">
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
          {habits.filter((h) => h.completed).length} / {habits.length} 達成
        </section>
      </main>
    </div>
  );
}

export default App;
