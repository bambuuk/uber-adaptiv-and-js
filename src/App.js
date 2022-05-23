import { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from './pages/MainPage';
import CarsPage from './pages/CarsPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/choise-car" element={<CarsPage />}/>
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
