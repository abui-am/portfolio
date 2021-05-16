import React from 'react';

const ThemeStateContext = React.createContext({});
const ThemeUpdaterContext = React.createContext<Function>(() => {});

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = React.useState('theme-light');
  return (
    <ThemeStateContext.Provider value={theme}>
      <ThemeUpdaterContext.Provider value={setTheme}>
        <div data-theme={theme} className="root-page">
          {children}
        </div>
      </ThemeUpdaterContext.Provider>
    </ThemeStateContext.Provider>
  );
};

function useThemeState() {
  const countState = React.useContext(ThemeStateContext);
  if (typeof countState === 'undefined') {
    throw new Error('useThemeState must be used within a ThemeProvider');
  }
  return countState;
}

function useThemeUpdater() {
  const setTheme = React.useContext(ThemeUpdaterContext);
  if (typeof setTheme === 'undefined') {
    throw new Error('useThemeUpdater must be used within a ThemeProvider');
  }
  const increment = React.useCallback((val) => setTheme(val), [setTheme]);
  return increment;
}

export { ThemeProvider, useThemeState, useThemeUpdater };
