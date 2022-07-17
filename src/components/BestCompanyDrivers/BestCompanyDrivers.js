import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import BestCompanyDriversView from './BestCompanyDriversView';
import fetchbestDriversList from '../../store/drivers/actions';

function BestCompanyDrivers() {
  const dispatch = useDispatch();
  const { dataDrivers, loadingStatus } = useSelector((state) => state.drivers);

  useEffect(() => {
    dispatch(fetchbestDriversList('https://62a11ee47b9345bcbe46a4c5.mockapi.io/drivers'));
  }, []);

  return (
    <BestCompanyDriversView 
      data={dataDrivers}
      fetchbestDriversList={fetchbestDriversList}
      loading={loadingStatus}
    />
  );
}

export default BestCompanyDrivers;
