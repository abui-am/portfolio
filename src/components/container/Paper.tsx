import React from 'react';

import styles from './Paper.module.scss';

export interface PaperProps {
  noShadow?: boolean;
  withOutline?: boolean;
}
const Paper: React.FC<PaperProps> = ({ noShadow, withOutline, children }) => {
  return (
    <div
      className={styles.paper}
      style={{
        boxShadow: noShadow ? '0px' : '',
        border: `1px solid ${withOutline ? 'var(--background-tertiary)' : 'transparent'}`,
      }}
    >
      {children}
    </div>
  );
};

export default Paper;
