import clsx from 'clsx';
import * as React from 'react';

export function CommentaryBoxWrapper({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={clsx('flex items-center space-x-[60px]', className)} {...rest}>
      {children}
    </div>
  );
}
