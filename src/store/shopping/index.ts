import { Categories } from './types';

interface ShoppingState {
  categories: Categories
}

export const initialState = (injects?: ShoppingState): ShoppingState => ({
  categories:[
    {
      id: '1',
      name: 'All Categories'
    },
    {
      id: '2502',
      name: 'PC'
    },
    {
      id: '10002',
      name: 'Book, Magazine, Comic'
    }
  ]
});

export const reducer = (state = initialState()): ShoppingState => {
  return state;
};
