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
          'flex flex-col w-full min-w-full h-full min-h-screen',
          withBackground && 'bg-black bg-opacity-30',
          className
        )}
        ref={ref}
        {...rest}
      >
        <div
          className={clsx(
            'flex flex-col flex-1',
            gradient === 'to-right' && 'bg-gradient-to-r',
            gradient === 'to-left' && 'bg-gradient-to-l',
            gradient && 'from-transparent to-black'
          )}
        >
          {children}
        </div>
      </main>
    );
  }
);

Screen.displayName = 'Screen';
