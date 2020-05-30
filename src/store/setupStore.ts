import { createStore, combineReducers, applyMiddleware, Store, compose } from 'redux';
import { logger } from 'redux-logger';
import { connectRouter, routerMiddleware, RouterRootState } from 'connected-react-router';
import thunk from 'redux-thunk';
import { appReducers, initialState }from './reducers';
import { History } from 'history';

export type RootState = ReturnType<typeof initialState> & RouterRootState
export type ReduxStoreInstance = Store<RootState>

export const setupStore = (history: History, preloadedState?: {}) => {
  return createStore(
    combineReducers({
      ...appReducers,
      router: connectRouter(history)
    }),
    preloadedState,
    compose(
      applyMiddleware(
        logger,
        thunk,
        routerMiddleware(history)
      )
    )
  );
};
