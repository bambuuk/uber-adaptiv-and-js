import { useState, Suspense, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeContext from './context/ThemeContext';

import MainPage from './pages/MainPage';
import CarsPage from './pages/CarsPage';
import Page404 from './pages/404';

function App() {
  const [theme, setTheme] = useState('light');

  function chooseTheme(propsTheme) {
    setTheme(propsTheme);
  }

  const controlTheme = useMemo(() => ({ theme, chooseTheme }), [theme, chooseTheme]);

  return (
    <BrowserRouter>
      <Suspense fallback="Loading...">
        <div className="App">
          <ThemeContext.Provider value={controlTheme}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/choise-car" element={<CarsPage />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </ThemeContext.Provider>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
