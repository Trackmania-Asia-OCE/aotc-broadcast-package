import * as React from 'react';
import { AOTC2023CurrentMatch } from '~/components/aotc-2023/in-game-current-match';
import { AOTC2023InGameOverlay } from '~/components/aotc-2023/in-game-overlay';
import { ControlsContainer } from '~/components/ui/controls-container';
import { SceneContainer } from '~/components/ui/scene-container';
import { Screen } from '~/components/ui/screen';

export default function InGameScene() {
  return (
    <Screen>
      <SceneContainer>
        <AOTC2023InGameOverlay>
          <AOTC2023CurrentMatch currentMatch="Lower Bracket #1" />
        </AOTC2023InGameOverlay>
      </SceneContainer>
      <ControlsContainer />
    </Screen>
  );
}
