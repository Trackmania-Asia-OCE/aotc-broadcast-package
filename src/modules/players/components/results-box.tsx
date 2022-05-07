import clsx from 'clsx';
import * as React from 'react';

export type ResultsColorSchemes =
  | 'default'
  | 'win'
  | 'lose'
  | 'first'
  | 'second'
  | 'third'
  | 'fourth';
export type ResultsVariants = 'short' | 'long';

export interface ResultsBoxProps extends React.ComponentPropsWithoutRef<'div'> {
  variant?: ResultsVariants;
  colorScheme?: ResultsColorSchemes;
}

function getColorScheme(variant: ResultsColorSchemes = 'default') {
  switch (variant) {
    case 'default': {
      return 'border-white text-white';
    }
    case 'win': {
      return 'border-brand-green text-brand-green';
    }
    case 'lose': {
      return 'border-brand-red text-brand-red';
    }
    case 'first': {
      return 'border-brand-gold text-brand-gold';
    }
    case 'second': {
      return 'border-brand-silver text-brand-silver';
    }
    case 'third': {
      return 'border-brand-bronze text-brand-bronze';
    }
    case 'fourth': {
      return 'border-brand-turquoise text-brand-turquoise';
    }
    default: {
      return 'border-white text-white';
    }
  }
}

export function ResultsBox({
  className,
  children,
  variant = 'long',
  colorScheme = 'default',
  ...rest
}: ResultsBoxProps) {
  return (
    <div
      className={clsx(
        'flex items-center justify-center border-4',
        variant === 'short' ? 'w-[50px] h-[100px]' : 'w-[100px] h-[100px]',
        getColorScheme(colorScheme),
        className
      )}
      {...rest}
    >
      <p className="text-2xl leading-7 font-brand uppercase">{children}</p>
    </div>
  );
}
