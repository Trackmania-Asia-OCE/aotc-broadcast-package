import clsx from 'clsx';
import * as React from 'react';

export interface PlayerCardItemProps extends React.ComponentPropsWithoutRef<'div'> {
  icon?: React.ReactNode;
  description: string;
  isMultiline?: boolean;
}

export function PlayerCardItem({
  icon,
  description,
  children,
  className,
  isMultiline = false,
  ...rest
}: PlayerCardItemProps) {
  return (
    <div className={clsx('grid grid-cols-item-card', className)} {...rest}>
      <div className="flex items-center justify-center w-[100px] h-[100px] flex-shrink-0 bg-white text-brand-further-red">
        {icon}
      </div>
      <div className="flex items-center justify-start min-w-0 px-9 h-[100px] bg-brand-further-red text-brand-white">
        <p
          className={clsx(
            isMultiline ? 'text-xl leading-6' : 'text-2xl leading-7 truncate',
            'font-brand uppercase tracking-brand-wide'
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
