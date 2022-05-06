import * as React from 'react';
import { SceneContent } from '~/components/ui/scene-content';
import { SceneFooter } from '~/components/ui/scene-footer';
import { SceneHeader } from '~/components/ui/scene-header';
import { Screen } from '~/components/ui/screen';
import { CommentaryBox } from '~/modules/commentary-booth/components';
import { useSingleCommentator } from '~/modules/commentary-booth/hooks';

export default function CommentaryBoothSingleScene() {
  const { data } = useSingleCommentator();

  return (
    <Screen className="bg-black bg-opacity-25">
      <SceneHeader />
      <SceneContent className="flex items-center justify-center">
        <CommentaryBox nationality={data?.country ?? ''} commentatorName={data?.name ?? ''} />
      </SceneContent>
      <SceneFooter footerText="Commentary Booth" />
    </Screen>
  );
}
