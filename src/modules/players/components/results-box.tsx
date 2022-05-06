import clsx from 'clsx';
import * as React from 'react';

export type ResultsVariants = 'win' | 'lose' | 'first' | 'second' | 'third' | 'fourth';

export interface ResultsBoxProps extends React.ComponentPropsWithoutRef<'div'> {
  variant?: ResultsVariants;
}

function getVariants(variant: ResultsVariants = 'win') {
  switch (variant) {
    case 'win': {
      return 'border-brand-green text-brand-green';
    }
    case 'lose': {
      return 'border-brand-red text-brand-red';
    }
    default: {
      return 'border-brand-green text-brand-green';
    }
  }
}

export function ResultsBox({ className, children, variant = 'win', ...rest }: ResultsBoxProps) {
  return (
    <div
      className={clsx(
        'flex items-center justify-center w-[100px] h-[100px] border-4',
        getVariants(variant),
        className
      )}
      {...rest}
    >
      <p className="text-2xl leading-7 font-brand uppercase">{children}</p>
    </div>
  );
}
