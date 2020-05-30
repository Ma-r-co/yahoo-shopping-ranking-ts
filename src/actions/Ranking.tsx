import fetchJsonp from 'fetch-jsonp';
import qs from 'qs';
import { startRequest, receiveData, finishRequest } from '../store/ranking/actions';
import { Actions } from '../store/actions';
import { RootState } from '../store/setupStore';
import { ThunkAction } from 'redux-thunk';
import { replace, CallHistoryMethodAction } from 'connected-react-router';


const API_URL = 'https://shopping.yahooapis.jp/ShoppingWebService/V1/json/categoryRanking';
const APP_ID = 'dj00aiZpPVlvWDl4d09uVGpoRSZzPWNvbnN1bWVyc2VjcmV0Jng9YzY-';


export const fetchRanking = (categoryId: string): ThunkAction<void, RootState, null, Actions | CallHistoryMethodAction> => {
  return async (dispatch, getState) => {
    const categories = getState().shopping.categories;
    const category = categories.find(category => (category.id === categoryId));
    if (typeof category === 'undefined') {
      dispatch(replace('/'));
      return;
    }

    dispatch(startRequest(category));

    const queryString = qs.stringify({
      appid: APP_ID,
      category_id: categoryId
    });

    try {
      const query = `${API_URL}?${queryString}`
      const response = await fetchJsonp(query);
      const data = await response.json();
      dispatch(receiveData(category, null, data));
    } catch (err) {
      dispatch(receiveData(category, err));
    }

    dispatch(finishRequest(category));

  };
}
