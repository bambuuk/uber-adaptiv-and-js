import { Component } from 'react';

import Header from '../header/Header';
import Promo from '../main/promo/Promo';
import Reasons from '../main/reasons/Reasons';
import Mobile from '../main/mobile/Mobile';
import Choise from '../main/choise/Choise';
import Require from '../main/require/Require';
import City from '../main/city/City';
import Footer from '../footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>

        <main>
          <Promo/>
          <Reasons/>
          <Mobile/>
          <Choise/>
          <Require/>
          <City/>
        </main>

        <Footer/>
      </div>
    );
  }
}

export default App;
