import clsx from 'clsx';
import * as React from 'react';
import * as styles from './result-item.css';

export interface ResultItemProps {
  position: number;
  country?: string;
  name?: string;
}

export const ResultItem = React.forwardRef<HTMLDivElement, ResultItemProps>(function ResultItem(
  { position, country, name },
  ref
) {
  return (
    <div ref={ref} className="flex items-center flex-1 w-full h-[50px] bg-black/25">
      <div className="flex items-center justify-center w-[50px] h-[50px] text-white">
        <span className={clsx('font-brand uppercase font-bold', styles.capText)}>{position}</span>
      </div>
      <div className="flex items-center justify-center w-[75px] h-[50px] bg-white text-black">
        <span className={clsx('font-brand uppercase font-bold', styles.capText)}>{country}</span>
      </div>
      <div className="flex items-center justify-center flex-1 h-[50px] px-[10px] text-white">
        <span className={clsx('font-brand uppercase font-bold line-clamp-1', styles.capText)}>
          {name}
        </span>
      </div>
    </div>
  );
});
