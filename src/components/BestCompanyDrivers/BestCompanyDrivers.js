import { useState, useEffect } from 'react';
import axios from 'axios';
import BestCompanyDriversView from './BestCompanyDriversView';

function BestCompanyDrivers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://62a11ee47b9345bcbe46a4c5.mockapi.io/drivers')
      .then((res) => setData(res.data))
      .catch((err) => {
        throw new Error(
          `Could not fetch ${'https://62a11ee47b9345bcbe46a4c5.mockapi.io/drivers'}, message: "${err.message}."`
        );
      });
  }, []);

  return (
    <BestCompanyDriversView data={data} />
  );
}

export default BestCompanyDrivers;
