import * as React from 'react';
import { SceneContent } from '~/components/ui/scene-content';
import { SceneFooter } from '~/components/ui/scene-footer';
import { SceneHeader } from '~/components/ui/scene-header';
import { Screen } from '~/components/ui/screen';
import { CommentaryBox } from '~/modules/commentary-booth/components';
import { useSingleCommentator } from '~/modules/commentary-booth/hooks';
import { useLatestResults } from '~/modules/matches/hooks';
import { PlayerListItem, ResultsBox } from '~/modules/players/components';

export default function CommentaryBoothSingleWithResultsScene() {
  const { data: commentator } = useSingleCommentator();
  const { data: results } = useLatestResults();

  return (
    <Screen className="bg-black bg-opacity-25">
      <SceneHeader />
      <SceneContent className="flex items-center justify-center">
        <div className="flex items-center space-x-[84px]">
          <CommentaryBox
            nationality={commentator?.country ?? ''}
            commentatorName={commentator?.name ?? ''}
          />
          <div className="flex flex-col items-center space-y-6">
            <p className="text-white text-[32px] leading-[38px] text-center font-brand uppercase tracking-brand-wide -mr-[0.25em]">
              Latest Result
            </p>
            <PlayerListItem
              nationality={results?.[0].country ?? ''}
              playerName={results?.[0].name ?? ''}
            >
              <ResultsBox variant="short">1</ResultsBox>
            </PlayerListItem>
            <PlayerListItem
              nationality={results?.[1].country ?? ''}
              playerName={results?.[1].name ?? ''}
            >
              <ResultsBox variant="short">2</ResultsBox>
            </PlayerListItem>
            <PlayerListItem
              nationality={results?.[2].country ?? ''}
              playerName={results?.[2].name ?? ''}
            >
              <ResultsBox variant="short">3</ResultsBox>
            </PlayerListItem>
            <PlayerListItem
              nationality={results?.[3].country ?? ''}
              playerName={results?.[3].name ?? ''}
            >
              <ResultsBox variant="short">4</ResultsBox>
            </PlayerListItem>
          </div>
        </div>
      </SceneContent>
      <SceneFooter footerText="Commentary Booth" />
    </Screen>
  );
}