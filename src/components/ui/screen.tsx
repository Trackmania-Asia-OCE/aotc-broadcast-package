import * as React from 'react';
import clsx from 'clsx';

export interface ScreenProps extends React.ComponentPropsWithoutRef<'main'> {
  withBackground?: boolean;
  gradient?: 'to-right' | 'to-left' | 'none';
}

export const Screen = React.forwardRef<HTMLDivElement, ScreenProps>(
  ({ children, className, withBackground, gradient, ...rest }, ref) => {
    return (
      <main
        className={clsx(
          'grid w-full min-w-full h-full min-h-screen grid-rows-scene-wrapper',
          withBackground && 'bg-black/10',
          className
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </main>
    );
  }
);

Screen.displayName = 'Screen';
