import { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AddCarsView from './AddCarsView';

const typeCarList = ['Седан', 'Пикап', 'Универсал'];

function AddCars(props) {
  const [data, setData] = useState({
    title: '',
    typeCar: '',
    classComfort: '',
    driver: '',
    url: '',
  });

  const myRef = useRef(null);

  useEffect(() => {
    myRef.current.focus();
  }, []);

  const onValueInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  // send info abount new car and zeroing AddCars' state
  const sendCarItem = (e) => {
    e.preventDefault();
    const { typeCar } = data;
    const { onAddItem } = props;
    if (typeCarList.includes(typeCar)) {
      const {
        title, classComfort, driver, url
      } = data;
      onAddItem(title, typeCar, classComfort, driver, url);
      setData({
        title: '',
        typeCar: '',
        classComfort: '',
        driver: '',
        url: ''
      });
    } 
  };

  const onResetItem = (e) => {
    e.preventDefault();
    setData({
      title: '',
      typeCar: '',
      classComfort: '',
      driver: '',
      url: ''
    });
  };

  return (
    <AddCarsView
      data={data}
      onValueInputChange={onValueInputChange}
      sendCarItem={sendCarItem}
      onResetItem={onResetItem}
      myRef={myRef}
    />
  );
}

AddCars.propTypes = {
  onAddItem: PropTypes.func
};

AddCars.defaultProps = {
  onAddItem: null
};

export default AddCars;
