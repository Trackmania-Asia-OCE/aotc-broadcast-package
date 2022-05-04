import * as React from 'react';
import { SceneHeader } from '~/components/ui/scene-header';
import { Screen } from '~/components/ui/screen';

export default function EmptyScene() {
  return (
    <Screen className="bg-black bg-opacity-25">
      <SceneHeader />
    </Screen>
  );
}
