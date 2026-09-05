import type { Furniture, LevelTheme } from '../types/room';

export interface LevelInfo {
  level: number;
  name: string;
  theme: string;
  threshold: number;
  nextThreshold: number;
  completionsNeeded: number;
  totalCompletions: number;
}

export const ROOM_THEMES: LevelTheme[] = [
  {
    level: 1,
    name: 'はじまりの広場',
    wallGradient: 'from-amber-100 via-orange-50 to-yellow-50',
    floorGradient: 'from-amber-200 to-yellow-100',
    accentColor: 'bg-amber-300',
    atmosphereColor: 'bg-amber-100',
    description: '廣大な自然の中に小さな區切り',
  },
  {
    level: 2,
    name: '素朴なテント',
    wallGradient: 'from-orange-100 via-amber-50 to-yellow-50',
    floorGradient: 'from-stone-300 to-stone-200',
    accentColor: 'bg-orange-300',
    atmosphereColor: 'bg-orange-100',
    description: '木製ベッドと暖炉の温もり',
  },
  {
    level: 3,
    name: '木造ログハウス',
    wallGradient: 'from-orange-200 via-amber-100 to-yellow-100',
    floorGradient: 'from-amber-400 to-amber-300',
    accentColor: 'bg-orange-400',
    atmosphereColor: 'bg-amber-200',
    description: '梁見せる天井と暖炉の火',
  },
  {
    level: 4,
    name: '洗練されたインテリア',
    wallGradient: 'from-stone-100 via-amber-50 to-orange-50',
    floorGradient: 'from-amber-500 to-amber-400',
    accentColor: 'bg-yellow-400',
    atmosphereColor: 'bg-yellow-100',
    description: 'エレガントな家具と装飾品',
  },
  {
    level: 5,
    name: '王者のリビング',
    wallGradient: 'from-purple-100 via-pink-50 to-amber-50',
    floorGradient: 'from-amber-600 via-yellow-500 to-amber-500',
    accentColor: 'bg-yellow-500',
    atmosphereColor: 'bg-purple-100',
    description: '豪華なソファと王冠の輝き',
  },
];

export const FURNITURE_LIST: Furniture[] = [
  { id: 'tent', name: 'スタッフ在哪里', emoji: '⛺', position: { x: 50, y: 40 }, size: 'lg', unlockLevel: 1 },
  { id: 'sleeping-bag', name: '睡袋', emoji: '🛏️', position: { x: 45, y: 45 }, size: 'md', unlockLevel: 1 },
  { id: 'campfire', name: '篝火', emoji: '🔥', position: { x: 60, y: 50 }, size: 'md', unlockLevel: 1 },
  { id: 'tree', name: ' окружающий дерево', emoji: '🌳', position: { x: 20, y: 30 }, size: 'lg', unlockLevel: 1 },
  { id: 'wooden-bed', name: '木製ベッド', emoji: '🛏️', position: { x: 40, y: 45 }, size: 'md', unlockLevel: 2 },
  { id: 'wooden-chair', name: '木製椅子', emoji: '🪑', position: { x: 65, y: 55 }, size: 'sm', unlockLevel: 2 },
  { id: 'wood-table', name: '木製テーブル', emoji: '🪵', position: { x: 55, y: 55 }, size: 'md', unlockLevel: 2 },
  { id: 'bookshelf', name: '本棚', emoji: '📚', position: { x: 15, y: 35 }, size: 'md', unlockLevel: 3 },
  { id: 'fireplace', name: '暖炉', emoji: '🪵', position: { x: 50, y: 25 }, size: 'lg', unlockLevel: 3 },
  { id: 'plant', name: '観葉植物', emoji: '🪴', position: { x: 80, y: 45 }, size: 'sm', unlockLevel: 3 },
  { id: 'lamp', name: 'フロアランプ', emoji: '💡', position: { x: 25, y: 50 }, size: 'sm', unlockLevel: 4 },
  { id: 'sofa', name: 'ソファ', emoji: '🛋️', position: { x: 45, y: 55 }, size: 'lg', unlockLevel: 4 },
  { id: 'rug', name: 'ラグマット', emoji: '🟫', position: { x: 50, y: 65 }, size: 'lg', unlockLevel: 4 },
  { id: 'crown', name: '王冠', emoji: '👑', position: { x: 50, y: 15 }, size: 'md', unlockLevel: 5 },
  { id: 'trophy', name: 'トロフィー', emoji: '🏆', position: { x: 30, y: 40 }, size: 'sm', unlockLevel: 5 },
  { id: 'piano', name: 'ピアノ', emoji: '🎹', position: { x: 70, y: 45 }, size: 'md', unlockLevel: 5 },
];

export const LEVEL_CONFIG: LevelInfo[] = [
  {
    level: 1,
    name: 'Lv.1',
    theme: 'はじまりの広場',
    threshold: 0,
    nextThreshold: 400,
    completionsNeeded: 4,
    totalCompletions: 4,
  },
  {
    level: 2,
    name: 'Lv.2',
    theme: '素朴なテント・木製ベッド',
    threshold: 400,
    nextThreshold: 900,
    completionsNeeded: 5,
    totalCompletions: 9,
  },
  {
    level: 3,
    name: 'Lv.3',
    theme: '温かみのある木造ログハウス',
    threshold: 900,
    nextThreshold: 1600,
    completionsNeeded: 7,
    totalCompletions: 16,
  },
  {
    level: 4,
    name: 'Lv.4',
    theme: '充実したインテリア',
    threshold: 1600,
    nextThreshold: 2500,
    completionsNeeded: 9,
    totalCompletions: 25,
  },
  {
    level: 5,
    name: 'Lv.5',
    theme: '王者のリビング',
    threshold: 2500,
    nextThreshold: Infinity,
    completionsNeeded: 0,
    totalCompletions: 0,
  },
];
