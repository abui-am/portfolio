import { MoonIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import React from 'react';

import { useThemeState, useThemeUpdater } from '@/context/Theme';

import styles from './ThemeSwitcher.module.scss';
const ThemeSwitcher: React.FC = () => {
  const theme = useThemeState();
  const setTheme = useThemeUpdater();
  const isDark = theme === 'theme-dark';
  return (
    <div>
      <label id="switch" className={styles.switch}>
        <input
          type="checkbox"
          onChange={() => setTheme((theme: string) => (theme === 'theme-light' ? 'theme-dark' : 'theme-light'))}
          checked={theme === 'theme-dark'}
          id="slider"
        />
        <span className={clsx(styles.slider, isDark ? styles.active : null)}>
          <div className={theme === 'theme-dark' ? styles.buttonCheck : styles.buttonNotCheck}>
            <MoonIcon height={16} width={16} style={{ color: isDark ? '#FFE141' : 'white' }} />
          </div>
        </span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
