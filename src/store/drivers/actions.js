import axios from 'axios';
import { BEST_DRIVERS_LIST_FETCHING, BEST_DRIVERS_LIST_FETCHED, BEST_DRIVERS_LIST_ERROR } from './types';

export const bestDriversListFetching = () => ({ type: BEST_DRIVERS_LIST_FETCHING });
export const bestDriversListFetched = (value) => ({ type: BEST_DRIVERS_LIST_FETCHED, payload: value });
export const bestDriversListError = () => ({ type: BEST_DRIVERS_LIST_ERROR });

const fetchbestDriversList = (url) => (dispatch) => {
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

export default fetchbestDriversList;
