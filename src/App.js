import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeContext from './context/ThemeContext';

import MainPage from './pages/MainPage';
import CarsPage from './pages/CarsPage';
import withLayout from './hocs/withLayout';

// Component with HOC
const MainPageComponent = withLayout(MainPage);
const CarsPageComponent = withLayout(CarsPage);

function App() {
  const [state, setState] = useState({
    theme: 'light', // eslint-disable-line
    choiseTheme: choiseTheme, // eslint-disable-line
  });
 
  function choiseTheme(propsTheme) {
    setState({ 
      ...state,
      theme: propsTheme 
    }); // eslint-disable-line
  }

  return (
    <BrowserRouter>
      <div className="App">
        <ThemeContext.Provider value={state}>
          <Routes>
            <Route path="/" element={<MainPageComponent />} />
            <Route path="/choise-car" element={<CarsPageComponent />} />
          </Routes>
        </ThemeContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
