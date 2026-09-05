import { LevelBadge } from './LevelBadge';
import { RoomVisual } from './RoomVisual';

interface RoomContainerProps {
  level: number;
  totalPoints: number;
  className?: string;
}

export function RoomContainer({ level, totalPoints, className = '' }: RoomContainerProps) {
  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <LevelBadge level={level} totalPoints={totalPoints} />
      <RoomVisual level={level} />
    </div>
  );
}
