import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import * as React from 'react';
import { SceneContent } from '~/components/ui/scene-content';
import { SceneFooter } from '~/components/ui/scene-footer';
import { SceneHeader } from '~/components/ui/scene-header';
import { Screen } from '~/components/ui/screen';
import { useNextMatch } from '~/modules/matches/hooks';
import { ResultsListItem } from '~/modules/players/components';

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
}

export default function CommentaryBoothNextMatchScene() {
  const { t } = useTranslation('common');
  const { data } = useNextMatch();

  return (
    <Screen withBackground gradient="to-right">
      <SceneHeader />
      <SceneContent className="flex items-center justify-end">
        <div className="flex flex-col items-end space-y-6 w-[500px]">
          <p className="text-white text-xl font-brand uppercase tracking-brand-wider -mr-[1em]">
            {t('next-match-warmup.title')}
          </p>
          <ResultsListItem
            className="w-full"
            nationality={data?.[0].country ?? ''}
            playerName={data?.[0].name ?? ''}
          />
          <ResultsListItem
            className="w-full"
            nationality={data?.[1].country ?? ''}
            playerName={data?.[1].name ?? ''}
          />
          <ResultsListItem
            className="w-full"
            nationality={data?.[2].country ?? ''}
            playerName={data?.[2].name ?? ''}
          />
          <ResultsListItem
            className="w-full"
            nationality={data?.[3].country ?? ''}
            playerName={data?.[3].name ?? ''}
          />
        </div>
      </SceneContent>
      <SceneFooter footerText={t('next-match-warmup.footer-text')} />
    </Screen>
  );
}
