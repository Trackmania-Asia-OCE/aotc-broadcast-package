import * as React from 'react';
import { SceneContent } from '~/components/ui/scene-content';
import { SceneFooter } from '~/components/ui/scene-footer';
import { SceneHeader } from '~/components/ui/scene-header';
import { Screen } from '~/components/ui/screen';
import { useLatestResults } from '~/modules/matches/hooks';
import { ResultsListItem, ResultsBox } from '~/modules/players/components';

export default function LatestResultsScene() {
  const { data } = useLatestResults();

  return (
    <Screen withBackground>
      <SceneHeader />
      <SceneContent className="flex items-center justify-center">
        <div className="flex flex-col items-center space-y-6 w-[600px]">
          <p className="text-white text-[32px] leading-[38px] text-center font-brand uppercase tracking-brand-wide -mr-[0.25em]">
            AOTC Winners
          </p>
          <ResultsListItem
            className="w-full"
            nationality={data?.[0].country ?? ''}
            playerName={data?.[0].name ?? ''}
          >
            <ResultsBox colorScheme="first">1st</ResultsBox>
          </ResultsListItem>
          <ResultsListItem
            className="w-full"
            nationality={data?.[1].country ?? ''}
            playerName={data?.[1].name ?? ''}
          >
            <ResultsBox colorScheme="second">2nd</ResultsBox>
          </ResultsListItem>
          <ResultsListItem
            className="w-full"
            nationality={data?.[2].country ?? ''}
            playerName={data?.[2].name ?? ''}
          >
            <ResultsBox colorScheme="third">3rd</ResultsBox>
          </ResultsListItem>
          <ResultsListItem
            className="w-full"
            nationality={data?.[3].country ?? ''}
            playerName={data?.[3].name ?? ''}
          >
            <ResultsBox colorScheme="fourth">4th</ResultsBox>
          </ResultsListItem>
        </div>
      </SceneContent>
      <SceneFooter footerText="Winner Circle" />
    </Screen>
  );
}
