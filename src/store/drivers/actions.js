import { BEST_DRIVERS_LIST_FETCHING, BEST_DRIVERS_LIST_FETCHED, BEST_DRIVERS_LIST_ERROR } from './types';

export const bestDriversListFetching = () => ({ type: BEST_DRIVERS_LIST_FETCHING }); // eslint-disable-line
export const bestDriversListFetched = (value) => ({ type: BEST_DRIVERS_LIST_FETCHED, payload: value }); // eslint-disable-line
export const bestDriversListError = () => ({ type: BEST_DRIVERS_LIST_ERROR }); // eslint-disable-line
