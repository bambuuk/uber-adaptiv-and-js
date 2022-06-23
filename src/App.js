import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeContext from './context/ThemeContext';

import MainPage from './pages/MainPage';
import CarsPage from './pages/CarsPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light', // eslint-disable-line
      choiseTheme: this.choiseTheme, // eslint-disable-line
    };
  }

  choiseTheme = (propsTheme) => {
    this.setState({ theme: propsTheme }); // eslint-disable-line
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <ThemeContext.Provider value={this.state}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/choise-car" element={<CarsPage />} />
            </Routes>
          </ThemeContext.Provider>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
