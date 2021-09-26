import React, { CSSProperties } from 'react';

import styles from './Container.module.scss';

const Container: React.FC<{ style?: CSSProperties; outerStyle?: CSSProperties; withPadding?: boolean }> = ({
  children,
  style = {},
  outerStyle = {},
  withPadding,
}) => {
  return (
    <section className={withPadding ? styles.withPadding : styles.container} style={outerStyle}>
      <div className={styles.containerWrapper} style={style}>
        {children}
      </div>
    </section>
  );
};

export default Container;
