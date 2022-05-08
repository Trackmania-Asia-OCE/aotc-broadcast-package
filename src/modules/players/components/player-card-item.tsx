import clsx from 'clsx';
import * as React from 'react';

export interface PlayerCardItemProps extends React.ComponentPropsWithoutRef<'div'> {
  icon?: React.ReactNode;
  description: string;
}

export function PlayerCardItem({
  icon,
  description,
  children,
  className,
  ...rest
}: PlayerCardItemProps) {
  return (
    <div className={clsx('flex flex-row', className)} {...rest}>
      <div className="flex items-center justify-center w-[100px] h-[100px] bg-white text-brand-purple">
        {icon}
      </div>
      <div className="flex items-center justify-start p-9 min-w-0 w-[400px] h-[100px] bg-brand-purple text-brand-turquoise">
        <p className="text-2xl leading-7 font-brand uppercase truncate tracking-brand-wide">
          {description}
        </p>
      </div>
    </div>
  );
}
