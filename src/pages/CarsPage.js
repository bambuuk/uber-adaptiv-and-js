import { Component } from 'react';
import PropTypes from 'prop-types';

import ChoiseCar from '../components/ChoiseCar/ChoiseCar';
import Layout from '../components/Layout/Layout';

class CarsPage extends Component {
  render() {
    const { choiseTheme } = this.props;
    return (
      <Layout choiseTheme={choiseTheme}>
        <ChoiseCar />
      </Layout>
    );
  }
}

CarsPage.propTypes = { 
  choiseTheme: PropTypes.func, 
};

CarsPage.defaultProps = { 
  choiseTheme: null
};

export default CarsPage;
