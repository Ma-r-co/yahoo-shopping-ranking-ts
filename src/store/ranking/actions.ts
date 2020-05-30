import * as types from './types';
import { Category } from '../shopping/types';

export const startRequest = (category: Category) => ({
  type: types.START_REQUEST,
  payload: { category }
});

export const receiveData = (category: Category, error: any, response?: {}) => ({
  type: types.RECEIVE_DATA,
  payload: { category, error, response }
});

export const finishRequest = (category: Category) => ({
  type: types.FINISH_REQUEST,
  payload: { category }
});
