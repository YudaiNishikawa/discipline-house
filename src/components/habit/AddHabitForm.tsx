import { useState } from 'react';

interface AddHabitFormProps {
  onAdd: (name: string, description?: string) => void;
}

export function AddHabitForm({ onAdd }: AddHabitFormProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAdd(name.trim(), description.trim() || undefined);
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-4 rounded-2xl bg-[var(--social-bg)]">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="習慣名"
        className="rounded-lg px-4 py-2 bg-[var(--bg)] text-[var(--text-h)] border border-[var(--border)] focus:outline-none focus:border-[var(--accent)]"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="説明（任意）"
        className="rounded-lg px-4 py-2 bg-[var(--bg)] text-[var(--text-h)] border border-[var(--border)] focus:outline-none focus:border-[var(--accent)]"
      />
      <button
        type="submit"
        className="rounded-lg px-4 py-2 bg-[var(--accent)] text-white font-medium hover:opacity-90 transition-opacity"
      >
        追加
      </button>
    </form>
  );
}
