import * as React from 'react';
import { SceneContent } from '~/components/ui/scene-content';
import { SceneFooter } from '~/components/ui/scene-footer';
import { SceneHeader } from '~/components/ui/scene-header';
import { Screen } from '~/components/ui/screen';
import { useNextMatch } from '~/modules/matches/hooks';
import { PlayerListItem } from '~/modules/players/player-list-item';

export default function CommentaryBoothNextMatchScene() {
  const { data } = useNextMatch();

  return (
    <Screen withBackground gradient="to-right">
      <SceneHeader />
      <SceneContent className="flex items-center justify-end">
        <div className="space-y-6 text-right">
          <p className="text-white text-xl font-brand uppercase tracking-brand-wider -mr-[1em]">
            Players
          </p>
          <PlayerListItem
            nationality={data?.[0].country ?? '??'}
            playerName={data?.[0].name ?? '...'}
          />
          <PlayerListItem
            nationality={data?.[1].country ?? '??'}
            playerName={data?.[1].name ?? '...'}
          />
          <PlayerListItem
            nationality={data?.[2].country ?? '??'}
            playerName={data?.[2].name ?? '...'}
          />
          <PlayerListItem
            nationality={data?.[3].country ?? '??'}
            playerName={data?.[3].name ?? '...'}
          />
        </div>
      </SceneContent>
      <SceneFooter footerText="Next Match" />
    </Screen>
  );
}
