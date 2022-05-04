import * as React from 'react';

export interface SceneHeaderProps extends React.ComponentPropsWithoutRef<'header'> {
  footerText?: React.ReactNode;
}

export function SceneFooter({ footerText, className, ...rest }: SceneHeaderProps) {
  return (
    <footer className="flex flex-row items-start justify-between px-[101px] pb-[97px]" {...rest}>
      <div>
        <p className="font-brand uppercase tracking-[0.25em] text-white">AOTC: Spring 2022</p>
      </div>
      <div className="ml-12">
        <p className="font-brand uppercase tracking-[0.25em] text-white">{footerText}</p>
      </div>
    </footer>
  );
}
