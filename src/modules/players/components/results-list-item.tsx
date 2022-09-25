import clsx from 'clsx';
import * as React from 'react';

export interface ResultsListItemProps extends React.ComponentPropsWithoutRef<'div'> {
  nationality: string;
  playerName: string;
}

export function ResultsListItem({
  nationality,
  playerName,
  children,
  className,
  ...rest
}: ResultsListItemProps) {
  return (
    <div className={clsx('flex flex-row', className)} {...rest}>
      {children}
      <div className="flex items-center justify-center w-[100px] h-[100px] bg-white text-brand-further-red">
        <p className="text-2xl leading-7 font-brand uppercase">{nationality}</p>
      </div>
      <div className="flex items-center justify-start flex-1 p-9 min-w-0 h-[100px] bg-brand-further-red text-brand-white">
        <p className="text-2xl leading-7 font-brand uppercase truncate tracking-brand-wide">
          {playerName}
        </p>
      </div>
    </div>
  );
}
