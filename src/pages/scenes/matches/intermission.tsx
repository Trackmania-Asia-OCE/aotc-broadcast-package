import * as React from 'react';
import Countdown from 'react-countdown';
import { SceneContent } from '~/components/ui/scene-content';
import { SceneFooter } from '~/components/ui/scene-footer';
import { SceneHeader } from '~/components/ui/scene-header';
import { Screen } from '~/components/ui/screen';

export default function IntermissionScent() {
  const FIVE_MINUTES = 5 * 60 * 1000;

  return (
    <Screen className="bg-black bg-opacity-25">
      <SceneHeader />
      <SceneContent className="flex items-center justify-center">
        <div className="space-y-3 text-center">
          <p className="text-white text-[32px] font-brand tracking-brand-wide uppercase">
            Next match in
          </p>
          <div className="flex items-center justify-center w-[400px] h-[100px] bg-brand-purple text-brand-turquoise">
            <Countdown
              date={Date.now() + FIVE_MINUTES}
              precision={3}
              renderer={props => (
                <p className="font-brand text-5xl leading-[56px] tracking-brand-wide uppercase">
                  {props.minutes.toString().padStart(2, '0')}:
                  {props.seconds.toString().padStart(2, '0')}
                </p>
              )}
            />
          </div>
        </div>
      </SceneContent>
      <SceneFooter footerText="Intermission" />
    </Screen>
  );
}
