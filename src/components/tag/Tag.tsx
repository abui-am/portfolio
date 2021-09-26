import clsx from 'clsx';
import React from 'react';

import styles from './Tag.module.scss';
// eslint-disable-next-line react/require-default-props
const Tag: React.FC<{ text: string; withMargin?: boolean }> = ({ text, withMargin = false }) => {
  return (
    <div className={clsx(styles.tagBase, withMargin ? styles.withMargin : '')}>
      <span className={styles.tagText}>{text}</span>
    </div>
  );
};

export default Tag;
