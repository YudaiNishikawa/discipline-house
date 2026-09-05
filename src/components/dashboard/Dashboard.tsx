import type { LevelInfo } from '../../constants/levelConfig';
import { RoomContainer } from '../room/RoomContainer';

interface DashboardProps {
  totalPoints: number;
  levelInfo: LevelInfo;
  progress: number;
  formatPoints: (points: number) => string;
}

export function Dashboard({ totalPoints, levelInfo, progress, formatPoints }: DashboardProps) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl p-6 bg-[var(--social-bg)] border-2 border-[var(--accent-border)] shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold text-[var(--text-h)]">
            Discipline House
          </h1>
          <p className="text-sm text-[var(--text)]">習慣を達成して資産を蓄積しよう</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-[var(--text-h)]">
            {formatPoints(totalPoints)} pt
          </div>
          <div className="text-sm text-[var(--text)]">総資産</div>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <div className="px-4 py-2 rounded-full bg-[var(--accent-bg)] border-2 border-[var(--accent-border)]">
          <span className="text-lg font-bold text-[var(--text-h)]">{levelInfo.name}</span>
        </div>
        <div className="flex-1">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-[var(--text)]">{levelInfo.theme}</span>
            <span className="text-[var(--text)]">{progress.toFixed(1)}%</span>
          </div>
          <div className="h-3 rounded-full bg-[var(--bg)] overflow-hidden">
            <div
              className="h-full rounded-full bg-[var(--accent)] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {levelInfo.level < 5 && (
        <div className="text-sm text-[var(--text)]">
          次のレベルまで: {formatPoints(levelInfo.nextThreshold - totalPoints)} pt
        </div>
      )}
      </div>

      <RoomContainer level={levelInfo.level} totalPoints={totalPoints} />
    </div>
  );
}
