import * as React from 'react';
import { SceneContent } from '~/components/ui/scene-content';
import { SceneFooter } from '~/components/ui/scene-footer';
import { SceneHeader } from '~/components/ui/scene-header';
import { Screen } from '~/components/ui/screen';
import { useLatestResults } from '~/modules/matches/hooks';
import { PlayerListItem, ResultsBox } from '~/modules/players/components';

export default function LatestResultsScene() {
  const { data } = useLatestResults();

  return (
    <Screen withBackground>
      <SceneHeader />
      <SceneContent className="flex items-center justify-center">
        <div className="flex flex-col items-center space-y-6">
          <p className="text-white text-[32px] leading-[38px] text-center font-brand uppercase tracking-brand-wide -mr-[0.25em]">
            AOTC Winners
          </p>
          <PlayerListItem nationality={data?.[0].country ?? ''} playerName={data?.[0].name ?? ''}>
            <ResultsBox colorScheme="first">1st</ResultsBox>
          </PlayerListItem>
          <PlayerListItem nationality={data?.[1].country ?? ''} playerName={data?.[1].name ?? ''}>
            <ResultsBox colorScheme="second">2nd</ResultsBox>
          </PlayerListItem>
          <PlayerListItem nationality={data?.[2].country ?? ''} playerName={data?.[2].name ?? ''}>
            <ResultsBox colorScheme="third">3rd</ResultsBox>
          </PlayerListItem>
          <PlayerListItem nationality={data?.[3].country ?? ''} playerName={data?.[3].name ?? ''}>
            <ResultsBox colorScheme="fourth">4th</ResultsBox>
          </PlayerListItem>
        </div>
      </SceneContent>
      <SceneFooter footerText="Winner Circle" />
    </Screen>
  );
}
