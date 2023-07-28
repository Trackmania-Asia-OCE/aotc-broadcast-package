import * as React from 'react';
import clsx from 'clsx';

export type SceneContainerProps = React.ComponentPropsWithoutRef<'div'>;

export const SceneContainer = React.forwardRef<HTMLDivElement, SceneContainerProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div
        className={clsx('flex flex-col w-full min-w-full h-full flex-1 relative', className)}
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

SceneContainer.displayName = 'ScreenContainer';
