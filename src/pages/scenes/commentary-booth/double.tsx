import * as React from 'react';
import { SceneContent } from '~/components/ui/scene-content';
import { SceneFooter } from '~/components/ui/scene-footer';
import { SceneHeader } from '~/components/ui/scene-header';
import { Screen } from '~/components/ui/screen';
import { CommentaryBox } from '~/modules/commentary-booth/components';
import { useDoubleCommentators } from '~/modules/commentary-booth/hooks';

export default function CommentaryBoothDoubleScene() {
  const { data } = useDoubleCommentators();

  return (
    <Screen className="bg-black bg-opacity-25">
      <SceneHeader />
      <SceneContent className="flex items-center justify-center">
        <div className="inline-flex space-x-[180px]">
          <CommentaryBox
            nationality={data?.[0].country ?? ''}
            commentatorName={data?.[0].name ?? ''}
          />
          <CommentaryBox
            nationality={data?.[1].country ?? ''}
            commentatorName={data?.[1].name ?? ''}
          />
        </div>
      </SceneContent>
      <SceneFooter footerText="Commentary Booth" />
    </Screen>
  );
}
