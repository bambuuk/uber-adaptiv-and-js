import { UPDATE_BEST_DRIVERS_LIST } from './types';

import staff from '../../img/man-and-woman.png';

const initState = {
  dataDrivers: [{
    name: 'Ще не знайшлись',
    imgUrl: staff,
    id: 'Ще не знайшлись'
  }]
};

// eslint-disable-next-line
const drivers = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_BEST_DRIVERS_LIST:
      return {
        dataDrivers: action.payload
      };
    default: 
      return state;
  }
};

export default drivers;
