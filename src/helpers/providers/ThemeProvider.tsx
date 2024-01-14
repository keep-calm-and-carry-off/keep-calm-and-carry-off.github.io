import React, { createContext, FC, useContext, useEffect, useState } from 'react';
import Contacts from 'src/components/Contacts';
import { useThemeContext } from 'src/hooks/useThemeContext';

export const ThemeContext = createContext<string | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const themeContext: string = useThemeContext()
  const [theme, setTheme] = useState(themeContext);

  useEffect(() => {
    document.body.classList.add(theme + '-mode');
    return () => {
      document.body.classList.remove(theme + '-mode');
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <Contacts themeSelector={toggleTheme}/>
      {children}
    </ThemeContext.Provider>
  );
};