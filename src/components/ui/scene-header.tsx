import * as React from 'react';

export interface SceneHeaderProps extends React.ComponentPropsWithoutRef<'header'> {
  currentRound?: React.ReactNode;
}

export function SceneHeader({ children, className, currentRound, ...rest }: SceneHeaderProps) {
  return (
    <header className="flex flex-row items-start justify-between px-[101px] pt-[85px]" {...rest}>
      <div>{children}</div>
      <div className="flex items-center ml-12">
        {currentRound}
        <img src="/assets/images/aotc-logo.png" className="w-[50px] h-[50px]" alt="AOTC" />
      </div>
    </header>
  );
}
