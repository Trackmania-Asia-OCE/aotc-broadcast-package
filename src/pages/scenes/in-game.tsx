import * as React from 'react';
import { AOTC2023InGameOverlay } from '~/components/aotc-2023/in-game-overlay';
import { ControlsContainer } from '~/components/ui/controls-container';
import { SceneContainer } from '~/components/ui/scene-container';
import { Screen } from '~/components/ui/screen';
import { ToggleSwitch } from '~/components/ui/toggle-switch';
import { ControlsCard } from '~/modules/controls/controls-card';
import { CurrentMatch } from '~/modules/in-game/controls/current-match';
import { PlayerSelect } from '~/modules/in-game/controls/player-select';
import { useInGameSceneStore } from '~/modules/in-game/store';
import { MapCard } from '~/modules/in-game/components/map-card';
import { PlayerCard } from '~/modules/in-game/components/player-card';
import { AOTC2023CurrentMatch } from '~/modules/in-game/components/in-game-current-match';
import { AOTC2023MapRecords } from '~/modules/in-game/components/in-game-map-records';
import { MapSelect } from '~/modules/in-game/controls/map-select';

export default function InGameScene() {
  const currentMatch = useInGameSceneStore(state => state.currentMatch);
  const selectedMap = useInGameSceneStore(state => state.selectedMap);
  const showable = useInGameSceneStore(state => state.showable);
  const setShowable = useInGameSceneStore(state => state.setShowable);

  return (
    <Screen>
      <SceneContainer>
        <AOTC2023InGameOverlay>
          <AOTC2023CurrentMatch currentMatch={currentMatch} />
          <AOTC2023MapRecords currentMapUID={selectedMap?.uid} />
          <PlayerCard open={showable === 'player-card'} onClose={() => setShowable(undefined)} />
          <MapCard open={showable === 'map-card'} onClose={() => setShowable(undefined)} />
        </AOTC2023InGameOverlay>
      </SceneContainer>
      <ControlsContainer>
        <ControlsCard>
          <div className="bg-gray-50 px-4 py-2 sm:px-6">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Settings</h2>
          </div>
          <div className="p-4 sm:px-6">
            <div className="flex items-center space-x-6">
              <CurrentMatch />
              <MapSelect />
              <PlayerSelect />
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-2 sm:px-6">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Showables</h2>
          </div>
          <div className="p-4 sm:px-6">
            <div className="flex items-center justify-end space-x-4">
              <div>Map Records (TODO)</div>
              <ToggleSwitch
                label="Map Card"
                enabled={showable === 'map-card'}
                setEnabled={checked => {
                  if (checked) {
                    setShowable('map-card');
                  } else {
                    setShowable(undefined);
                  }
                }}
              />
              <ToggleSwitch
                label="Player Card"
                enabled={showable === 'player-card'}
                setEnabled={checked => {
                  if (checked) {
                    setShowable('player-card');
                  } else {
                    setShowable(undefined);
                  }
                }}
              />
            </div>
          </div>
        </ControlsCard>
      </ControlsContainer>
    </Screen>
  );
}
