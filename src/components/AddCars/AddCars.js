import { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import AddCarsView from './AddCarsView';

const typeCarList = ['Седан', 'Пикап', 'Универсал'];

class AddCars extends Component {
  constructor() {
    super();
    this.myRef = createRef();
    this.state = { 
      title: '',
      typeCar: '',
      classComfort: '',
      driver: '',
      url: '',
    };
  }

  componentDidMount() {
    this.myRef.current.focus();
  }

  onValueInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // send info abount new car and zeroing AddCars' state
  sendCarItem = (e) => {
    e.preventDefault();
    const { typeCar } = this.state;
    const { onAddItem } = this.props;
    if (typeCarList.includes(typeCar)) {
      const {
        title, classComfort, driver, url 
      } = this.state;
      onAddItem(title, typeCar, classComfort, driver, url);
      this.setState({
        title: '',
        typeCar: '',
        classComfort: '',
        driver: '',
        url: ''
      });
    } else {
      // eslint-disable-next-line
      alert(`Тип автомобиля может быть: Седан, Пикап, Универсал. 
            Пожалуйста, впишите один из предложенных вариантов`); 
    }
  };

  onResetItem = (e) => {
    e.preventDefault();
    this.setState({
      title: '',
      typeCar: '',
      classComfort: '',
      driver: '',
      url: ''
    });
  };

  render() {
    return (
      <AddCarsView
        data={this.state}
        onValueInputChange={this.onValueInputChange}
        sendCarItem={this.sendCarItem}
        onResetItem={this.onResetItem}
        myRef={this.myRef}
      />
    );
  }
}

AddCars.propTypes = {
  onAddItem: PropTypes.func
};

AddCars.defaultProps = {
  onAddItem: null
};

export default AddCars;
