import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import * as React from 'react';
import { SceneContent } from '~/components/ui/scene-content';
import { SceneFooter } from '~/components/ui/scene-footer';
import { SceneHeader } from '~/components/ui/scene-header';
import { Screen } from '~/components/ui/screen';
import { useLatestResults } from '~/modules/matches/hooks';
import { ResultsListItem, ResultsBox } from '~/modules/players/components';

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
}

export default function LatestResultsScene() {
  const { t } = useTranslation('common');
  const { data } = useLatestResults();

  return (
    <Screen withBackground>
      <SceneHeader />
      <SceneContent className="flex items-center justify-center">
        <div className="flex flex-col items-center space-y-6 w-[600px]">
          <p className="text-white text-[32px] leading-[38px] text-center font-brand uppercase tracking-brand-wide -mr-[0.25em]">
            {t('latest-result.title')}
          </p>
          <ResultsListItem
            className="w-full"
            nationality={data?.[0].country ?? ''}
            playerName={data?.[0].name ?? ''}
          >
            <ResultsBox colorScheme="win">{data?.[0].result ?? ''}</ResultsBox>
          </ResultsListItem>
          <ResultsListItem
            className="w-full"
            nationality={data?.[1].country ?? ''}
            playerName={data?.[1].name ?? ''}
          >
            <ResultsBox colorScheme="win">{data?.[1].result ?? ''}</ResultsBox>
          </ResultsListItem>
          <ResultsListItem
            className="w-full"
            nationality={data?.[2].country ?? ''}
            playerName={data?.[2].name ?? ''}
          >
            <ResultsBox colorScheme="lose">{data?.[2].result ?? ''}</ResultsBox>
          </ResultsListItem>
          <ResultsListItem
            className="w-full"
            nationality={data?.[3].country ?? ''}
            playerName={data?.[3].name ?? ''}
          >
            <ResultsBox colorScheme="lose">{data?.[3].result ?? ''}</ResultsBox>
          </ResultsListItem>
        </div>
      </SceneContent>
      <SceneFooter footerText={t('latest-result.footer-text')} />
    </Screen>
  );
}
