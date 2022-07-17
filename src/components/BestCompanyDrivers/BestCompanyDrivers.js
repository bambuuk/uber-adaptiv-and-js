import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import BestCompanyDriversView from './BestCompanyDriversView';
import { bestDriversListFetching, bestDriversListFetched, bestDriversListError } from '../../store/drivers/actions';

function BestCompanyDrivers() {
  const dispatch = useDispatch();
  const { dataDrivers, loadingStatus } = useSelector((state) => state.drivers);

  const onRequest = (url) => {
    dispatch(bestDriversListFetching());
    axios.get(url)
      .then((res) => {
        dispatch(bestDriversListFetched(res.data));
      })
      .catch((err) => {
        dispatch(bestDriversListError());
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
      data={dataDrivers}
      onRequest={onRequest}
      loading={loadingStatus}
    />
  );
}

export default BestCompanyDrivers;
