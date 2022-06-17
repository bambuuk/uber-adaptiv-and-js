import { Component } from 'react';
import axios from 'axios';
import BestCompanyDriversView from './BestCompanyDriversView';

class BestCompanyDrivers extends Component {
  // eslint-disable-next-line
  state = {
    data: []
  };

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
    const listDrivers = data.map(({ name, imgUrl, id }) => {
      return (
        <div className="bestCompDrivers_item" key={id}>
          <img className="bestCompDrivers_img" src={imgUrl} alt={name} />
          <p className="bestCompDrivers_name">{name}</p>
        </div>
      );
    });
    return (
      <BestCompanyDriversView listDrivers={listDrivers} />
    );
  }
}

export default BestCompanyDrivers;
