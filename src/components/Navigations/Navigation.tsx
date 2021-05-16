import React from 'react';
import Container from '../container/Container';
import styles from './Navigation.module.scss';
import menu from '@/json/navigation.json';
import ThemeSwitcher from '../forms/ThemeSwitcher';

const Navigation: React.FC = () => {
  return (
    <Container>
      <nav className={styles.navWrapper}>
        <div className={styles.left}>
          <h1 className="title">Abuidillah AM</h1>
        </div>
        <div className={styles.right}>
          {menu.map(({ name, slug }) => {
            return (
              <a href={slug} key={slug}>
                {name}
              </a>
            );
          })}
        </div>
        <div style={{ marginLeft: 32 }}>
          <ThemeSwitcher />
        </div>
      </nav>
    </Container>
  );
};

export default Navigation;
