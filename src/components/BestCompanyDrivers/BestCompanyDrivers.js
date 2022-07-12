import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import BestCompanyDriversView from './BestCompanyDriversView';
import { updBestDriversList } from '../../store/drivers/actions';

function BestCompanyDrivers() {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const content = useSelector((state) => state.drivers.dataDrivers);

  const onRequest = (url) => {
    setLoading(true);
    axios.get(url)
      .then((res) => {
        setLoading(false);
        dispatch(updBestDriversList(res.data));
      })
      .catch((err) => {
        setLoading(false);
        throw new Error(
          `Could not fetch ${url}, message: "${err.message}."`
        );
      });
  };

  useEffect(() => {
    onRequest('https://62a11ee47b9345bcbe46a4c5.mockapi.io/drivers');
  }, []);

  return (
    <BestCompanyDriversView 
      data={content}
      onRequest={onRequest}
      loading={loading}
    />
  );
}

export default BestCompanyDrivers;
