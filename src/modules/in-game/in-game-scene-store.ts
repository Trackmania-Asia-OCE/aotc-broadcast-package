import { create } from 'zustand';
import { PlayerData } from '~/server/types';

export type InGameSceneShowables = 'player-card' | 'map-card';

export interface InGameSceneStore {
  currentMatch: string;
  setCurrentMatch: (match: string) => void;
  selectedPlayer?: PlayerData;
  setSelectedPlayer: (player?: PlayerData) => void;
  showable?: InGameSceneShowables;
  setShowable: (showable?: InGameSceneShowables) => void;
}

export const useInGameSceneStore = create<InGameSceneStore>(set => ({
  currentMatch: 'Lower Bracket #1',
  setCurrentMatch: (match: string) => set(() => ({ currentMatch: match })),
  selectedPlayer: undefined,
  setSelectedPlayer: (player?: PlayerData) => set(() => ({ selectedPlayer: player })),
  showable: undefined,
  setShowable: (showable?: InGameSceneShowables) => set(() => ({ showable })),
}));
