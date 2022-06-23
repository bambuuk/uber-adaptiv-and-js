import { createContext } from 'react';

const ThemeContex = createContext({
  theme: 'dark',
  choiseTheme: () => {},
});

export default ThemeContex;
