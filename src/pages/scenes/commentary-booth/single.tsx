import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import * as React from 'react';
import { AOTC2023SceneFooter } from '~/components/aotc-2023/scene-footer';
import { AOTC2023SceneHeader } from '~/components/aotc-2023/scene-header';
import { ControlsContainer } from '~/components/ui/controls-container';
import { SceneContainer } from '~/components/ui/scene-container';
import { SceneContent } from '~/components/ui/scene-content';
import { Screen } from '~/components/ui/screen';
import { ToggleSwitch } from '~/components/ui/toggle-switch';
import { CommentaryBox, CommentaryBoxWrapper } from '~/modules/commentary-booth/components';
import { EditCastersLeft } from '~/modules/commentary-booth/controls/edit-casters-left';
import { useCommentaryBoothStore } from '~/modules/commentary-booth/store';
import { ControlsCard } from '~/modules/controls/controls-card';
import { EditMatchResults } from '~/modules/matches/controls/edit-match-results';
import { MatchResults } from '~/modules/matches/showables/match-results';

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
}

export default function CommentaryBoothSingleScene() {
  const { t } = useTranslation('common');
  const [isResultsVisible, setIsResultsVisible] = React.useState(false);
  const casterLeftCountry = useCommentaryBoothStore(state => state.casterLeftCountry);
  const casterLeftName = useCommentaryBoothStore(state => state.casterLeftName);
  const casterLeftHandle = useCommentaryBoothStore(state => state.casterLeftHandle);

  return (
    <Screen withBackground>
      <SceneContainer>
        <AOTC2023SceneHeader title="AOTC 2023" subtitle={t('commentary-booth.header-text')} />
        <SceneContent className="flex flex-col items-center justify-start space-y-[50px]">
          <CommentaryBoxWrapper>
            <CommentaryBox
              nationality={casterLeftCountry}
              name={casterLeftName}
              handle={casterLeftHandle}
            />
          </CommentaryBoxWrapper>
          <MatchResults isVisible={isResultsVisible} />
        </SceneContent>
        <AOTC2023SceneFooter />
      </SceneContainer>
      <ControlsContainer>
        <ControlsCard>
          <div className="bg-gray-50 px-4 py-2 sm:px-6">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Caster</h2>
          </div>
          <div className="p-4 sm:px-6">
            <EditCastersLeft />
          </div>
          <div className="bg-gray-50 px-4 py-2 sm:px-6">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Results</h2>
          </div>
          <div className="p-4 sm:px-6">
            <EditMatchResults />
          </div>
          <div className="bg-gray-50 px-4 py-2 sm:px-6">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Showables</h2>
          </div>
          <div className="p-4 sm:px-6">
            <div className="flex items-center space-x-6">
              <ToggleSwitch
                label="Results"
                enabled={isResultsVisible}
                setEnabled={checked => {
                  if (checked) {
                    setIsResultsVisible(true);
                  } else {
                    setIsResultsVisible(false);
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
