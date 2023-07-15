import { create } from 'zustand';

export interface InGameSceneStore {
  currentMatch: string;
  setCurrentMatch: (match: string) => void;
}

export const useInGameSceneStore = create<InGameSceneStore>(set => ({
  currentMatch: 'Lower Bracket #1',
  setCurrentMatch: (match: string) => set(() => ({ currentMatch: match })),
}));
