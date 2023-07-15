import * as React from 'react';
import { AOTC2023CurrentMatch } from '~/components/aotc-2023/in-game-current-match';
import { AOTC2023InGameOverlay } from '~/components/aotc-2023/in-game-overlay';
import { ControlsContainer } from '~/components/ui/controls-container';
import { SceneContainer } from '~/components/ui/scene-container';
import { Screen } from '~/components/ui/screen';
import { ControlsCard } from '~/modules/controls/controls-card';
import { CurrentMatch } from '~/modules/in-game/current-match';
import { useInGameSceneStore } from '~/modules/in-game/in-game-scene-store';

export default function InGameScene() {
  const currentMatch = useInGameSceneStore(state => state.currentMatch);

  return (
    <Screen>
      <SceneContainer>
        <AOTC2023InGameOverlay>
          <AOTC2023CurrentMatch currentMatch={currentMatch} />
        </AOTC2023InGameOverlay>
      </SceneContainer>
      <ControlsContainer>
        <ControlsCard>
          <div className="bg-gray-50 px-4 py-2 sm:px-6">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Settings</h2>
          </div>
          <div className="p-4 sm:px-6">
            <div className="flex items-center space-x-4">
              <CurrentMatch />
              <div>Current map (TODO)</div>
              <div>Current player</div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-2 sm:px-6">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Showables</h2>
          </div>
          <div className="p-4 sm:px-6">
            <div className="flex items-center space-x-4">
              <div>Map Records (TODO)</div>
              <div>Player Card</div>
              <div>Map Card</div>
            </div>
          </div>
        </ControlsCard>
      </ControlsContainer>
    </Screen>
  );
}
