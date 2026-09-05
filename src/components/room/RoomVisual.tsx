import { ROOM_THEMES } from '../../constants/levelConfig';
import { RoomItems } from './RoomItems';

interface RoomVisualProps {
  level: number;
}

export function RoomVisual({ level }: RoomVisualProps) {
  const theme = ROOM_THEMES.find((t) => t.level === level) || ROOM_THEMES[0];

  return (
    <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-xl">
      <div className={`h-1/2 w-full bg-gradient-to-br ${theme.wallGradient}`}>
        <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-black/10 to-transparent" />

        <div className="absolute left-4 right-4 top-4 flex justify-between">
          <div className="h-16 w-12 rounded-lg bg-gradient-to-br from-amber-200/50 to-amber-100/30 shadow-inner" />
          <div className="h-16 w-20 rounded-lg bg-gradient-to-br from-sky-200/50 to-sky-100/30 shadow-inner" />
          <div className="h-16 w-12 rounded-lg bg-gradient-to-br from-amber-200/50 to-amber-100/30 shadow-inner" />
        </div>

        {level >= 3 && (
          <div className="absolute left-1/2 top-2 h-8 w-48 border-b-4 border-amber-700/30" />
        )}

        {level >= 2 && (
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
            <div className="h-20 w-32 rounded-t-2xl bg-gradient-to-b from-orange-300 to-orange-400 shadow-lg ring-2 ring-orange-500/30" />
            <div className="absolute left-1/2 top-4 -translate-x-1/2 text-xl">🔥</div>
          </div>
        )}

        {level >= 4 && (
          <>
            <div className="absolute left-8 top-8 h-6 w-4 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-400 shadow-lg" />
            <div className="absolute right-8 top-8 h-6 w-4 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-400 shadow-lg" />
          </>
        )}

        {level >= 5 && (
          <div className="absolute right-8 top-4 text-2xl">👑</div>
        )}
      </div>

      <div className={`h-1/2 w-full bg-gradient-to-b ${theme.floorGradient}`}>
        <div className="absolute inset-x-0 h-2 bg-gradient-to-b from-black/10 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-t from-black/20 to-transparent" />

        <div
          className={`absolute inset-0 ${theme.atmosphereColor} opacity-50 transition-opacity duration-500`}
        />
      </div>

      <RoomItems level={level} />

      <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
