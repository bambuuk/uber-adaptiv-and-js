import { BEST_DRIVERS_LIST_FETCHING, BEST_DRIVERS_LIST_FETCHED, BEST_DRIVERS_LIST_ERROR } from './types';

import staff from '../../img/man-and-woman.png';

const initState = {
  dataDrivers: [{
    name: 'Ще не знайшлись',
    imgUrl: staff,
    id: 'Ще не знайшлись'
  }],
  loadingStatus: false
};

// eslint-disable-next-line
const drivers = (state = initState, action) => {
  switch (action.type) {
    case BEST_DRIVERS_LIST_FETCHING:
      return {
        ...state,
        loadingStatus: true
      };
    case BEST_DRIVERS_LIST_FETCHED:
      return {
        ...state,
        dataDrivers: action.payload,
        loadingStatus: false
      };
    case BEST_DRIVERS_LIST_ERROR:
      return {
        ...state,
        loadingStatus: false
      };
    default: 
      return state;
  }
};

export default drivers;
