export interface LevelInfo {
  level: number;
  name: string;
  theme: string;
  threshold: number;
  nextThreshold: number;
  completionsNeeded: number;
  totalCompletions: number;
}

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
