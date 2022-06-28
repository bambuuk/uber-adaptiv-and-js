import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeContext from './context/ThemeContext';

import MainPage from './pages/MainPage';
import CarsPage from './pages/CarsPage';

function App() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     theme: 'light', // eslint-disable-line
  //     choiseTheme: this.choiseTheme, // eslint-disable-line
  //   };
  // }

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
            <Route path="/" element={<MainPage />} />
            <Route path="/choise-car" element={<CarsPage />} />
          </Routes>
        </ThemeContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
