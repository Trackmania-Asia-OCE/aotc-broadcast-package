import * as React from 'react';

export interface SceneFooterProps extends React.ComponentPropsWithoutRef<'header'> {
  footerText?: React.ReactNode;
}

export function SceneFooter({ footerText, className, ...rest }: SceneFooterProps) {
  return (
    <footer className="flex flex-row items-start justify-between px-[101px] pb-[97px]" {...rest}>
      <div>
        <p className="font-brand uppercase tracking-brand-wide text-white">AOTC: Fall 2022</p>
      </div>
      <div className="ml-12">
        <p className="font-brand uppercase tracking-brand-wide text-white">{footerText}</p>
      </div>
    </footer>
  );
}
