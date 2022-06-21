import { Component } from 'react';

import Promo from '../components/Promo/Promo';
import Reasons from '../components/Reasons/Reasons';
import Mobile from '../components/Mobile/Mobile';
import Choise from '../components/Choise/Choise';
import Require from '../components/Require/Require';
import City from '../components/City/City';
import Layout from '../components/Layout/Layout';

class MainPage extends Component {
  render() {
    return (
      <Layout>
        <>
          <Promo />
          <Reasons />
          <Mobile />
          <Choise />
          <Require />
          <City />
        </>
      </Layout>
    );
  }
}

export default MainPage;
