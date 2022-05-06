import * as React from 'react';
import { SceneFooter } from '~/components/ui/scene-footer';
import { SceneHeader } from '~/components/ui/scene-header';
import { Screen } from '~/components/ui/screen';

export default function CommentaryBoothNextMatchScene() {
  return (
    <Screen className="bg-black bg-opacity-25">
      <SceneHeader />
      <div className="flex-1">h</div>
      <SceneFooter footerText="Commentary Booth" />
    </Screen>
  );
}
