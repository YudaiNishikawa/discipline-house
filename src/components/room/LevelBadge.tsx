import { ROOM_THEMES } from '../../constants/levelConfig';

interface LevelBadgeProps {
  level: number;
  totalPoints: number;
}

export function LevelBadge({ level, totalPoints }: LevelBadgeProps) {
  const theme = ROOM_THEMES.find((t) => t.level === level) || ROOM_THEMES[0];

  const levelNames: Record<number, string> = {
    1: 'はじまりの広場',
    2: '素朴なテント',
    3: '木造ログハウス',
    4: '洗練されたインテリア',
    5: '王者のリビング',
  };

  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={`relative flex items-center gap-2 rounded-full px-4 py-2 ${theme.accentColor} shadow-lg`}
      >
        <span className="text-lg font-bold text-amber-900">Lv.{level}</span>
        <span className="text-sm font-medium text-amber-800">{levelNames[level]}</span>
      </div>
      <div className="flex items-center gap-2 text-xs text-amber-700">
        <span className="font-medium">{totalPoints.toLocaleString()} ポイント</span>
        <span className="opacity-60">•</span>
        <span>{theme.description}</span>
      </div>
    </div>
  );
}
