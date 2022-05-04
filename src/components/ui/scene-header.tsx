import * as React from 'react';

export interface SceneHeaderProps extends React.ComponentPropsWithoutRef<'header'> {
  header?: React.ReactNode;
}

export function SceneHeader({ header, className, ...rest }: SceneHeaderProps) {
  return (
    <header className="flex flex-row items-start justify-between px-[101px] pt-[85px]" {...rest}>
      <div>{header}</div>
      <div className="ml-12">
        <img src="/assets/images/aotc-logo.png" className="w-[50px] h-[50px]" alt="AOTC" />
      </div>
    </header>
  );
}
