import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import * as React from 'react';
import Countdown from 'react-countdown';
import { SceneContent } from '~/components/ui/scene-content';
import { SceneFooter } from '~/components/ui/scene-footer';
import { SceneHeader } from '~/components/ui/scene-header';
import { Screen } from '~/components/ui/screen';
import { useCountdownTimer } from '~/modules/intermission/hooks';
import { parseNumber } from '~/utils/query-parser';
import { useOnMount } from '~/utils/use-on-mount';

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
}

export default function IntermissionScent() {
  const [isMounted, setIsMounted] = React.useState(false);
  const { t } = useTranslation('common');
  const { data } = useCountdownTimer();

  const { minutes, seconds } = React.useMemo(() => {
    const secondsParsed = parseNumber(data?.seconds);

    return {
      minutes: parseNumber(data?.minutes) ?? 5,
      seconds: secondsParsed && secondsParsed <= 60 && secondsParsed >= 0 ? secondsParsed : 0,
    };
  }, [data]);

  const CountdownTimer = React.useMemo(
    () => (
      <Countdown
        date={Date.now() + minutes * 60 * 1000 + seconds * 1000}
        precision={3}
        renderer={props => (
          <p className="font-brand text-5xl leading-[56px] tracking-brand-wide uppercase">
            {props.minutes.toString().padStart(2, '0')}:{props.seconds.toString().padStart(2, '0')}
          </p>
        )}
      />
    ),
    [minutes, seconds]
  );

  useOnMount(() => {
    setIsMounted(true);
  });

  return (
    <Screen className="bg-black bg-opacity-25">
      <SceneHeader />
      <SceneContent className="flex items-center justify-center">
        <div className="space-y-3 text-center">
          <p className="text-white text-[32px] font-brand tracking-brand-wide uppercase">
            {t('intermission.return-in-text')}
          </p>
          <div className="flex items-center justify-center w-[400px] h-[100px] bg-brand-further-red text-brand-white">
            {isMounted ? CountdownTimer : null}
          </div>
        </div>
      </SceneContent>
      <SceneFooter footerText={t('intermission.footer-text')} />
    </Screen>
  );
}
