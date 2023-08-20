import clsx from 'clsx';
import * as React from 'react';
import { useTranslation } from 'next-i18next';
import { ArrowIcon } from '../icons';
import * as styles from './scene-footer.css';

export interface AOTC2023SceneFooterProps {
  className?: string;
}

export function AOTC2023SceneFooter({ className }: AOTC2023SceneFooterProps) {
  const { t } = useTranslation('common');

  return (
    <footer className={clsx('flex flex-row items-start justify-between pb-[100px]', className)}>
      <div className="flex items-center pl-[100px] space-x-[10px]">
        <ArrowIcon height={11} className="text-white" />
        <p className={clsx('font-brand uppercase text-white', styles.footerText)}>
          {t('scene.footer-text')}
        </p>
      </div>
      <div className="pr-[100px]">
        <p className={clsx('font-brand uppercase text-white', styles.footerText)}>2023</p>
      </div>
    </footer>
  );
}
