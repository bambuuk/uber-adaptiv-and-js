import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeContext from './context/ThemeContext';

import MainPage from './pages/MainPage';
import CarsPage from './pages/CarsPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light',
    };
  }

  choiseTheme = (propsTheme) => {
    this.setState({ theme: propsTheme });
  };

  render() {
    const { theme } = this.state;
    // console.log(this.choiseTheme)

    return (
      <BrowserRouter>
        <div className="App">
          <ThemeContext.Provider value={theme}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/choise-car" element={<CarsPage choiseTheme={this.choiseTheme} />} />
            </Routes>
          </ThemeContext.Provider>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
