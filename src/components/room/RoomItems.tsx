import { useState } from 'react';
import { FURNITURE_LIST } from '../../constants/levelConfig';
import type { Furniture } from '../../types/room';

interface RoomItemsProps {
  level: number;
}

export function RoomItems({ level }: RoomItemsProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const unlockedFurniture = FURNITURE_LIST.filter((f) => f.unlockLevel <= level);

  const sizeClasses: Record<Furniture['size'], string> = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-5xl',
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {unlockedFurniture.map((furniture) => (
        <div
          key={furniture.id}
          className="absolute transition-all duration-500 ease-out"
          style={{
            left: `${furniture.position.x}%`,
            top: `${furniture.position.y}%`,
            transform: 'translate(-50%, -50%)',
            opacity: furniture.unlockLevel <= level ? 1 : 0.3,
          }}
          onMouseEnter={() => setHoveredId(furniture.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div
            className={`${sizeClasses[furniture.size]} filter drop-shadow-lg transition-transform duration-200 hover:scale-125 cursor-pointer`}
          >
            {furniture.emoji}
          </div>

          {hoveredId === furniture.id && (
            <div className="absolute left-1/2 -translate-x-1/2 -top-8 z-50 whitespace-nowrap rounded-lg bg-amber-900 px-3 py-1.5 text-xs font-medium text-amber-50 shadow-lg ring-2 ring-amber-700">
              {furniture.name}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 h-0 w-0 border-x-4 border-t-4 border-x-transparent border-t-amber-900" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
