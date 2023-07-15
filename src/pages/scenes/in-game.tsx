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
          <div className="bg-gray-50 px-4 py-4 sm:px-6">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Settings</h2>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <CurrentMatch />
          </div>
          <div className="bg-gray-50 px-4 py-4 sm:px-6">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Showables</h2>
          </div>
          <div className="px-4 py-5 sm:p-6">Map Records (TODO)</div>
        </ControlsCard>
      </ControlsContainer>
    </Screen>
  );
}
