import React from 'react';

import styles from './Tag.module.scss';
const Tag: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className={styles.tagBase}>
      <span className={styles.tagText}>{text}</span>
    </div>
  );
};

export default Tag;
