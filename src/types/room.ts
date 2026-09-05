export interface Furniture {
  id: string;
  name: string;
  emoji: string;
  position: { x: number; y: number };
  size: 'sm' | 'md' | 'lg';
  unlockLevel: number;
}

export interface LevelTheme {
  level: number;
  name: string;
  wallGradient: string;
  floorGradient: string;
  accentColor: string;
  atmosphereColor: string;
  description: string;
}

export interface RoomProps {
  level: number;
  totalPoints: number;
  className?: string;
}

export interface RoomItemProps {
  furniture: Furniture;
  isUnlocked: boolean;
}
