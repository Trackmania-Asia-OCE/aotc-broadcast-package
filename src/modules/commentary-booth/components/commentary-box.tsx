import * as React from 'react';
import clsx from 'clsx';
import * as styles from './commentary-box.css';

export interface CommentaryBoxProps {
  nationality: string;
  name: string;
  handle?: string;
}

export function CommentaryBox({ nationality, name, handle }: CommentaryBoxProps) {
  return (
    <div className="flex-shrink-0">
      <div className="border-4 border-white w-[750px] h-[400px]" />
      <div className="flex flex-row">
        <div className="flex items-center justify-center w-[75px] h-[75px] bg-white text-black">
          <p className={clsx('font-brand uppercase font-bold', styles.country)}>{nationality}</p>
        </div>
        <div className="flex flex-col items-start justify-center flex-1 px-4 min-w-0 h-[75px] bg-black/25 text-white space-y-2">
          <p className={clsx('font-brand uppercase font-bold', styles.name)}>{name}</p>
          <p className={clsx('font-brand uppercase font-medium', styles.handle)}>{handle}</p>
        </div>
      </div>
    </div>
  );
}
