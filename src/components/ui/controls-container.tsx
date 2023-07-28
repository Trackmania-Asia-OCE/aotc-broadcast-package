import * as React from 'react';
import clsx from 'clsx';

export type ControlsContainerProps = React.ComponentPropsWithoutRef<'div'>;

export const ControlsContainer = React.forwardRef<HTMLDivElement, ControlsContainerProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div
        className={clsx(
          'flex flex-col justify-end w-full min-w-full h-full border-t-4 border-t-screen-red border-dashed p-6',
          className
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

ControlsContainer.displayName = 'ControlsContainer';
