import clsx from 'clsx';
import * as React from 'react';
import * as styles from './commentary-box-wrapper.css';

export function CommentaryBoxWrapper({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={clsx('flex items-center space-x-[60px]', styles.root, className)} {...rest}>
      {children}
    </div>
  );
}
