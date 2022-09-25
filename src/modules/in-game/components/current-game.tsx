import * as React from 'react';

export interface CurrentGameProps {
  game: string;
}

export function CurrentGame({ game }: CurrentGameProps) {
  return (
    <div className="flex flex-row items-center">
      <div className="flex items-center max-w-[700px] h-[50px] px-9 min-w-[400px] bg-brand-further-red">
        <span className="text-brand-white text-2xl font-brand uppercase truncate tracking-brand-wide">
          {game}
        </span>
      </div>
    </div>
  );
}
