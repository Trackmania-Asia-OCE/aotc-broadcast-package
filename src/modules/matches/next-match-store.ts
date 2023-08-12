import { produce } from 'immer';
import { create } from 'zustand';
import { PlayerData } from '~/server/types';

export interface NextMatchStore {
  players: (PlayerData | undefined)[];
  setPlayerAtIndex: (index: number, player?: PlayerData) => void;
  removePlayerAtIndex: (index: number) => void;
}

const defaultPlayers = Array<PlayerData | undefined>(4).fill(undefined);

export const useNextMatchStore = create<NextMatchStore>(set => ({
  players: defaultPlayers,
  setPlayerAtIndex(index, player) {
    return set(
      produce((state: NextMatchStore) => {
        state.players[index] = player;
      })
    );
  },
  removePlayerAtIndex(index) {
    return set(
      produce((state: NextMatchStore) => {
        if (index < state.players.length) {
          state.players[index] = undefined;
        }
      })
    );
  },
}));
