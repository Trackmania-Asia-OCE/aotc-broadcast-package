import * as React from 'react';

export interface CurrentGameProps {
  game: string;
}

export function CurrentGame({ game }: CurrentGameProps) {
  return (
    <div className="flex flex-row items-center">
      <div className="flex items-center justify-center w-[50px] h-[50px] border-4 border-white">
        <span className="text-white text-2xl font-brand font-medium uppercase">#</span>
      </div>
      <div className="flex items-center max-w-[700px] h-[50px] px-9 min-w-[400px] bg-brand-purple">
        <span className="text-brand-turquoise text-2xl font-brand uppercase truncate tracking-brand-wide">
          {game}
        </span>
      </div>
    </div>
  );
}
