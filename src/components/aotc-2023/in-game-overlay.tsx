import * as React from 'react';
import * as styles from './in-game-overlay.css';

export function AOTC2023InGameOverlay({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className={styles.root}>
      <div className="flex flex-col items-end space-y-2">{children}</div>
    </div>
  );
}
