import * as React from 'react';

export function ControlsCard({ children }: React.PropsWithChildren<{}>) {
  return <div className="overflow-hidden rounded-lg bg-white shadow">{children}</div>;
}
