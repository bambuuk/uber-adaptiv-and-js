import { Component } from 'react';

import ChoiseCar from '../components/ChoiseCar/ChoiseCar';
import Layout from '../components/Layout/Layout';

class CarsPage extends Component {
  render() {
    return (
      <Layout>
        <ChoiseCar />
      </Layout>
    );
  }
}

export default CarsPage;
