import clsx from 'clsx';
import * as React from 'react';

export type SceneContentProps = React.ComponentPropsWithoutRef<'div'>;

export function SceneContent({ children, className, ...rest }: SceneContentProps) {
  return (
    <div className={clsx('flex-1 px-[101px]', className)} {...rest}>
      {children}
    </div>
  );
}
