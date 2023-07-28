import * as React from 'react';
import { AOTC2023SceneHeader } from '~/components/aotc-2023/scene-header';
import { ControlsContainer } from '~/components/ui/controls-container';
import { SceneContainer } from '~/components/ui/scene-container';
import { Screen } from '~/components/ui/screen';

export default function EmptyScene() {
  return (
    <Screen>
      <SceneContainer>
        <AOTC2023SceneHeader />
      </SceneContainer>
      <ControlsContainer />
    </Screen>
  );
}
