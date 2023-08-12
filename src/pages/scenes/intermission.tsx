import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import * as React from 'react';
import { AOTC2023IntermissionBlock } from '~/components/aotc-2023/intermission-block';
import { AOTC2023SceneFooter } from '~/components/aotc-2023/scene-footer';
import { AOTC2023SceneHeader } from '~/components/aotc-2023/scene-header';
import { ControlsContainer } from '~/components/ui/controls-container';
import { SceneContainer } from '~/components/ui/scene-container';
import { SceneContent } from '~/components/ui/scene-content';
import { Screen } from '~/components/ui/screen';
import { ToggleSwitch } from '~/components/ui/toggle-switch';
import { ControlsCard } from '~/modules/controls/controls-card';
import { EditNextMatch } from '~/modules/matches/controls/edit-next-match';
import { NextMatch } from '~/modules/matches/showables/next-match';

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
}

export default function IntermissionScene() {
  const { t } = useTranslation('common');
  const [isNextMatchVisible, setIsNextMatchVisible] = React.useState(false);

  return (
    <Screen withBackground>
      <SceneContainer>
        <AOTC2023SceneHeader />
        <SceneContent className="flex items-center justify-start">
          <AOTC2023IntermissionBlock title={t('intermission.title')} subtitle="AOTC 2023">
            <NextMatch isVisible={isNextMatchVisible} title={t('intermission.next-match-title')} />
          </AOTC2023IntermissionBlock>
        </SceneContent>
        <AOTC2023SceneFooter footerText={t('scene.footer-text')} />
      </SceneContainer>
      <ControlsContainer>
        <ControlsCard>
          <div className="bg-gray-50 px-4 py-2 sm:px-6">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Next Match</h2>
          </div>
          <div className="p-4 sm:px-6">
            <EditNextMatch />
          </div>
          <div className="bg-gray-50 px-4 py-2 sm:px-6">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Showables</h2>
          </div>
          <div className="p-4 sm:px-6">
            <div className="flex items-center space-x-6">
              <ToggleSwitch
                label="Next Match"
                enabled={isNextMatchVisible}
                setEnabled={checked => {
                  if (checked) {
                    setIsNextMatchVisible(true);
                  } else {
                    setIsNextMatchVisible(false);
                  }
                }}
              />
            </div>
          </div>
        </ControlsCard>
      </ControlsContainer>
    </Screen>
  );
}
