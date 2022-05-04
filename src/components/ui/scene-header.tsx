import * as React from 'react';

export type SceneHeaderProps = React.ComponentPropsWithoutRef<'header'>;

export function SceneHeader({ children, className, ...rest }: SceneHeaderProps) {
  return (
    <header className="flex flex-row items-start justify-between px-[101px] pt-[85px]" {...rest}>
      <div>{children}</div>
      <div className="ml-12">
        <img src="/assets/images/aotc-logo.png" className="w-[50px] h-[50px]" alt="AOTC" />
      </div>
    </header>
  );
}
