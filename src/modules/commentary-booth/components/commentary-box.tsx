import * as React from 'react';
import { PlayerListItem } from '../../players/components/player-list-item';

export interface CommentaryBoxProps {
  nationality: string;
  commentatorName: string;
}

export function CommentaryBox({ nationality, commentatorName }: CommentaryBoxProps) {
  return (
    <div className="border-t-4 border-white">
      <div className="h-[281px]" />
      <PlayerListItem nationality={nationality} playerName={commentatorName} />
    </div>
  );
}
