import * as React from 'react';
import { SceneContent } from '~/components/ui/scene-content';
import { SceneFooter } from '~/components/ui/scene-footer';
import { SceneHeader } from '~/components/ui/scene-header';
import { Screen } from '~/components/ui/screen';

export default function WelcomeScreenScene() {
  return (
    <Screen withBackground>
      <SceneHeader />
      <SceneContent className="flex items-center justify-end">
        <div className="text-right">
          <h1 className="text-white text-[128px] leading-[154px] font-brand uppercase truncate tracking-brand-wide -mr-[0.25em]">
            See You Soon
          </h1>
          <p className="text-white text-[20px] leading-[24px] font-brand uppercase truncate tracking-brand-wide -mr-[0.25em]">
            Stream Ending
          </p>
        </div>
      </SceneContent>
      <SceneFooter footerText="Intermission" />
    </Screen>
  );
}
