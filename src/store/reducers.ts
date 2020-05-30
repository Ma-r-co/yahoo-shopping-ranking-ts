import * as ranking from './ranking';
import * as shopping from './shopping';

export const initialState = () => {
  return {
    ranking: ranking.initialState(),
    shopping: shopping.initialState()
  };
};

export const appReducers = {
  ranking: ranking.reducer,
  shopping: shopping.reducer
};
