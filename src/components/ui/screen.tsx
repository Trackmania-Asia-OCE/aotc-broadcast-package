import * as React from 'react';
import clsx from 'clsx';

export type ScreenProps = React.ComponentPropsWithoutRef<'main'>;

export const Screen = React.forwardRef<HTMLDivElement, ScreenProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <main
        className={clsx('flex flex-col w-full min-w-full h-full min-h-screen', className)}
        ref={ref}
        {...rest}
      >
        {children}
      </main>
    );
  }
);

Screen.displayName = 'Screen';
