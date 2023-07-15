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

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
}

export default function WelcomeScreenScene() {
  const { t } = useTranslation('common');

  return (
    <Screen withBackground>
      <SceneContainer>
        <AOTC2023SceneHeader />
        <SceneContent className="flex items-center justify-start">
          <AOTC2023IntermissionBlock
            title={t('welcome-screen.title')}
            subtitle={t('welcome-screen.subtitle')}
          />
        </SceneContent>
        <AOTC2023SceneFooter />
      </SceneContainer>
      <ControlsContainer />
    </Screen>
  );
}
