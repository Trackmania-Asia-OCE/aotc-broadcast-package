import * as React from 'react';
import { SceneContent } from '~/components/ui/scene-content';
import { SceneFooter } from '~/components/ui/scene-footer';
import { SceneHeader } from '~/components/ui/scene-header';
import { Screen } from '~/components/ui/screen';
import { PlayerListItem } from '~/modules/players/player-list-item';

export default function CommentaryBoothNextMatchScene() {
  return (
    <Screen withBackground gradient="to-right">
      <SceneHeader />
      <SceneContent className="flex items-center justify-end">
        <div className="space-y-6 text-right">
          <p className="text-white text-xl font-brand uppercase tracking-[1em] -mr-[1em]">
            Players
          </p>
          <PlayerListItem nationality="ID" playerName="SuperLongUsername04" />
          <PlayerListItem nationality="ID" playerName="SuperLongUsername04" />
          <PlayerListItem nationality="ID" playerName="SuperLongUsername04" />
          <PlayerListItem nationality="ID" playerName="SuperLongUsername04" />
        </div>
      </SceneContent>
      <SceneFooter footerText="Commentary Booth" />
    </Screen>
  );
}
