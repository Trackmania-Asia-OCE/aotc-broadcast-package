import clsx from 'clsx';
import * as React from 'react';
import { ArrowIcon } from '../icons/arrow-icon';
import * as styles from './intermission-block.css';

export interface AOTC2023IntermissionBlockProps {
  title: string;
  subtitle?: string;
}

export function AOTC2023IntermissionBlock({
  title,
  subtitle,
  children,
}: React.PropsWithChildren<AOTC2023IntermissionBlockProps>) {
  return (
    <div className="flex items-center justify-between flex-1">
      <div className="text-left space-y-5 text-white">
        <h1 className={clsx('font-bold font-brand', styles.title)}>{title}</h1>
        {subtitle ? (
          <div className="flex items-center space-x-4">
            <ArrowIcon height={24} />
            <p className={clsx('font-medium font-brand uppercase', styles.subtitle)}>{subtitle}</p>
          </div>
        ) : null}
      </div>
      {children}
    </div>
  );
}
