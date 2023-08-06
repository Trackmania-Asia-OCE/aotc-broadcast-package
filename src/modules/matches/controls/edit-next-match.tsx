import * as React from 'react';
import { PlayersCombobox } from '~/modules/controls/players-combobox';
import { useNextMatchStore } from '../next-match-store';

export function EditNextMatch() {
  const players = useNextMatchStore(state => state.players);
  const setPlayerAtIndex = useNextMatchStore(state => state.setPlayerAtIndex);
  const removePlayerAtIndex = useNextMatchStore(state => state.removePlayerAtIndex);

  return (
    <div className="flex items-center space-x-6">
      <PlayersCombobox
        label="1st"
        selectedPlayer={players[0]}
        onSetSelectedPlayer={player => setPlayerAtIndex(0, player)}
        onClearSelectedPlayer={() => removePlayerAtIndex(0)}
      />
      <PlayersCombobox
        label="2nd"
        selectedPlayer={players[1]}
        onSetSelectedPlayer={player => setPlayerAtIndex(1, player)}
        onClearSelectedPlayer={() => removePlayerAtIndex(1)}
      />
      <PlayersCombobox
        label="3rd"
        selectedPlayer={players[2]}
        onSetSelectedPlayer={player => setPlayerAtIndex(2, player)}
        onClearSelectedPlayer={() => removePlayerAtIndex(2)}
      />
      <PlayersCombobox
        label="4th"
        selectedPlayer={players[3]}
        onSetSelectedPlayer={player => setPlayerAtIndex(3, player)}
        onClearSelectedPlayer={() => removePlayerAtIndex(3)}
      />
    </div>
  );
}
