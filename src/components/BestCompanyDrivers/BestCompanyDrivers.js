import { Component } from 'react';
import axios from 'axios';
import BestCompanyDriversView from './BestCompanyDriversView';

class BestCompanyDrivers extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get('https://62a11ee47b9345bcbe46a4c5.mockapi.io/drivers')
      .then((res) => this.setState({ data: res.data }))
      .catch((err) => { 
        throw new Error(
          `Could not fetch ${'https://62a11ee47b9345bcbe46a4c5.mockapi.io/drivers'}, message: "${err.message}."`
        ); 
      });
  }

  render() {
    const { data } = this.state;
    return (
      <BestCompanyDriversView data={data} />
    );
  }
}

export default BestCompanyDrivers;
