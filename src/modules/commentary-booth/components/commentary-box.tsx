import clsx from 'clsx';
import * as React from 'react';
import { ResultsListItem } from '../../players/components/results-list-item';

export interface CommentaryBoxProps {
  nationality: string;
  commentatorName: string;
  size?: 'md' | 'lg' | 'xl';
}

export function CommentaryBox({ nationality, commentatorName, size = 'md' }: CommentaryBoxProps) {
  const renderBoxStyles = () => {
    switch (size) {
      case 'xl': {
        return 'w-[840px]';
      }
      case 'lg': {
        return 'w-[654px]';
      }
      case 'md': {
        return 'w-[500px]';
      }
      default: {
        return 'w-[500px]';
      }
    }
  };

  const renderCameraStyles = () => {
    switch (size) {
      case 'xl': {
        return 'h-[471px]';
      }
      case 'lg': {
        return 'h-[367px]';
      }
      case 'md': {
        return 'h-[281px]';
      }
      default: {
        return 'h-[281px]';
      }
    }
  };

  return (
    <div className={clsx('flex-shrink-0 border-t-4 border-white', renderBoxStyles())}>
      <div className={renderCameraStyles()} />
      <ResultsListItem nationality={nationality} playerName={commentatorName} />
    </div>
  );
}
