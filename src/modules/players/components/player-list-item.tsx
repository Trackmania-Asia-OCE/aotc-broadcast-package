import clsx from 'clsx';
import * as React from 'react';

export interface PlayerListItemProps extends React.ComponentPropsWithoutRef<'div'> {
  nationality: string;
  playerName: string;
}

export function PlayerListItem({
  nationality,
  playerName,
  children,
  className,
  ...rest
}: PlayerListItemProps) {
  return (
    <div className={clsx('flex flex-row', className)} {...rest}>
      {children}
      <div className="flex items-center justify-center w-[100px] h-[100px] bg-white text-brand-black">
        <p className="text-2xl leading-7 font-brand uppercase">{nationality}</p>
      </div>
      <div className="flex items-center justify-start p-9 min-w-0 w-[400px] h-[100px] bg-brand-purple text-brand-turquoise">
        <p className="text-2xl leading-7 font-brand uppercase truncate tracking-brand-wide">
          {playerName}
        </p>
      </div>
    </div>
  );
}
