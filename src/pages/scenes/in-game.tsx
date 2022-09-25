import * as React from 'react';
import { SceneHeader } from '~/components/ui/scene-header';
import { Screen } from '~/components/ui/screen';
import { CurrentGame } from '~/modules/in-game/components/current-game';
import { useCurrentMatch } from '~/modules/matches/hooks';

export default function InGameScene() {
  const { isLoading, data } = useCurrentMatch();

  return (
    <Screen>
      <SceneHeader currentRound={<CurrentGame game={isLoading ? '' : data?.current ?? ''} />} />
    </Screen>
  );
}
