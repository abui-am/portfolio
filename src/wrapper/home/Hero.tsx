import React from 'react';

import Button from '@/components/button/Button';
import { Container } from '@/components/container';
import Navigation from '@/components/Navigations/Navigation';
import Ornament from '@/icons/Ornament';

import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.rootNav}>
      <Navigation />

      <Container style={{ position: 'relative' }}>
        <OrnamentWrapper>
          <div className={styles.heroContent}>
            <div className={styles.rootLeft}>
              <p style={{ marginBottom: 8, fontWeight: 'bold', color: 'var(--primary-color)' }}>
                In depth documentation of myself
              </p>
              <h3 style={{ marginBottom: 8 }}>Abuidillah Adjie Muliadi</h3>
              <p style={{ marginBottom: 24, color: 'var(--text-secondary)' }}>
                A passionate developer, who love to code and sometime design, and sometime drink coffee.
              </p>
              <div style={{ display: 'flex' }}>
                <Button style={{ marginRight: 16 }}>View Profile</Button>
                <Button variant="outlined">Talk is cheap, show me your code</Button>
              </div>
            </div>
            <div className={styles.rootRight}>
              <div className={styles.image}>
                <img src="./profile.png" />
                <div className={styles.ornament} />
              </div>
            </div>
          </div>
        </OrnamentWrapper>
      </Container>
    </section>
  );
};

const OrnamentWrapper: React.FC = ({ children }) => {
  return (
    <>
      <Ornament class={styles.ornamentLeftDown} fill="var(--ornament)" />
      <Ornament class={styles.ornamentLeftTop} fill="var(--ornament)" />
      <Ornament class={styles.ornamentCenter} fill="var(--ornament)" />
      <Ornament class={styles.ornamentRightTop} fill="var(--ornament)" />
      <Ornament class={styles.ornamentRightBottom} fill="var(--ornament)" />

      {children}
    </>
  );
};

export default Hero;
