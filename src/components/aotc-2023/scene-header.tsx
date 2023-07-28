import clsx from 'clsx';
import * as React from 'react';
import { ArrowIcon, CheckerboardIcon } from '../icons';
import * as styles from './scene-header.css';

export interface SceneHeaderProps extends React.ComponentPropsWithoutRef<'header'> {
  title?: string;
  subtitle?: string;
}

export function AOTC2023SceneHeader({
  children,
  className,
  title,
  subtitle,
  ...rest
}: SceneHeaderProps) {
  return (
    <header className="flex flex-row items-start justify-between pt-[100px]" {...rest}>
      <div
        className={clsx('flex items-center', title && 'border-l-[15px] border-l-white pl-[85px]')}
      >
        {title ? (
          <div className="space-y-[10px]">
            <h1 className={clsx('font-brand text-white uppercase font-bold', styles.title)}>
              {title}
            </h1>
            {subtitle ? (
              <div className="flex items-center space-x-[10px]">
                <ArrowIcon className="text-white" height={11} />
                <p className={clsx('font-brand text-white uppercase font-medium', styles.subtitle)}>
                  {subtitle}
                </p>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
      <div className="pr-[100px]">
        <CheckerboardIcon height={16} className="text-white" />
      </div>
    </header>
  );
}
