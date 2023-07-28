import * as React from 'react';

export function ControlsCard({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col flex-1 overflow-hidden rounded-lg bg-white shadow">
      <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">Controls</h3>
      </div>
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
}
