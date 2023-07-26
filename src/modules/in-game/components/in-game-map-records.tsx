import * as React from 'react';

export interface AOTC2023MapRecordsProps {
  currentMapUID?: string;
}

export function AOTC2023MapRecords({ currentMapUID }: AOTC2023MapRecordsProps) {
  return <div>AOTC2023MapRecords {currentMapUID}</div>;
}
