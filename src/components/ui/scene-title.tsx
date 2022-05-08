import clsx from 'clsx';
import * as React from 'react';

export interface SceneTitleProps extends React.ComponentPropsWithoutRef<'div'> {
  sceneTitle: React.ReactNode;
  description?: string;
}

export function SceneTitle({
  sceneTitle,
  description,
  children,
  className,
  ...rest
}: SceneTitleProps) {
  return (
    <div className={clsx('text-white', className)} {...rest}>
      <h1 className="text-[64px] leading-[76px] font-brand tracking-brand-wide font-medium uppercase">
        {sceneTitle}
      </h1>
      <p className="text-[36px] leading-[43px] font-brand tracking-brand-wide uppercase">
        {description}
      </p>
    </div>
  );
}
