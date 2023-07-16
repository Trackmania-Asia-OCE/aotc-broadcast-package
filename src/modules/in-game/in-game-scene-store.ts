import { create } from 'zustand';
import { PlayerData } from '~/server/types';

export interface InGameSceneStore {
  currentMatch: string;
  setCurrentMatch: (match: string) => void;
  selectedPlayer?: PlayerData;
  setSelectedPlayer: (player?: PlayerData) => void;
}

export const useInGameSceneStore = create<InGameSceneStore>(set => ({
  currentMatch: 'Lower Bracket #1',
  setCurrentMatch: (match: string) => set(() => ({ currentMatch: match })),
  selectedPlayer: undefined,
  setSelectedPlayer: (player?: PlayerData) => set(() => ({ selectedPlayer: player })),
}));
