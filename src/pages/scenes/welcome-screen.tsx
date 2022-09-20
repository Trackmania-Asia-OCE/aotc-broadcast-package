import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import * as React from 'react';
import { SceneContent } from '~/components/ui/scene-content';
import { SceneFooter } from '~/components/ui/scene-footer';
import { SceneHeader } from '~/components/ui/scene-header';
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
      <SceneHeader />
      <SceneContent className="flex items-center justify-end">
        <div className="text-right">
          <h1 className="text-white text-[128px] leading-[154px] font-brand uppercase truncate tracking-brand-wide -mr-[0.25em]">
            {t('welcome-screen.title')}
          </h1>
          <p className="text-white text-[20px] leading-[24px] font-brand uppercase truncate tracking-brand-wide -mr-[0.25em]">
            {t('welcome-screen.subtitle')}
          </p>
        </div>
      </SceneContent>
      <SceneFooter footerText={t('welcome-screen.footer-text')} />
    </Screen>
  );
}
