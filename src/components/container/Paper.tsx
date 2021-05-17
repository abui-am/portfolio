import styles from 'Paper.module.scss';
import React from 'react';

export interface PaperProps {
  noShadow?: boolean;
}
const Paper: React.FC<PaperProps> = ({ noShadow, children }) => {
  return (
    <div className={styles.paper} style={{ boxShadow: noShadow ? '0' : 'none' }}>
      {children}
    </div>
  );
};

export default Paper;
