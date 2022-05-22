import * as React from 'react';
import { CameraIcon, ControllerIcon, HashtagIcon, MedalIcon } from '~/components/icons';
import { SceneContent } from '~/components/ui/scene-content';
import { SceneFooter } from '~/components/ui/scene-footer';
import { SceneHeader } from '~/components/ui/scene-header';
import { SceneTitle } from '~/components/ui/scene-title';
import { Screen } from '~/components/ui/screen';
import { PlayerCardItem } from '~/modules/players/components';
import { usePlayerCard } from '~/modules/players/hooks';

export default function PlayerCardScene() {
  const { data } = usePlayerCard();

  return (
    <Screen withBackground gradient="to-left">
      <SceneHeader>
        <SceneTitle
          sceneTitle={data?.username ?? '-'}
          description={`${data?.realName ?? '-'} // ${data?.nationality ?? '-'} // ${
            data?.age ?? '-'
          }`}
        />
      </SceneHeader>
      <SceneContent className="flex items-center justify-start">
        <div className="flex flex-col items-start space-y-6 w-[600px]">
          <p className="text-white text-[32px] leading-[38px] text-center font-brand uppercase tracking-brand-wide -mr-[0.25em]">
            Info
          </p>
          <PlayerCardItem
            className="w-full"
            icon={<MedalIcon className="w-[50px] h-[50px]" />}
            description={data?.bestResults ?? '-'}
          />
          <PlayerCardItem
            className="w-full"
            icon={<ControllerIcon className="w-[50px] h-[50px]" />}
            description={data?.input ?? '-'}
          />
          <PlayerCardItem
            className="w-full"
            icon={<CameraIcon className="w-[50px] h-[50px]" />}
            description={`${data?.camera ?? '-'}`}
          />
          <PlayerCardItem
            className="w-full"
            icon={<HashtagIcon className="w-[50px] h-[50px]" />}
            description={data?.style ?? '-'}
          />
        </div>
      </SceneContent>
      <SceneFooter footerText="Player Information" />
    </Screen>
  );
}
