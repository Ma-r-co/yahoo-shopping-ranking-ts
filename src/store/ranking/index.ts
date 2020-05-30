import { Actions } from '../actions'
import { RankingType } from './types'
import { Category } from '../shopping/types'

const getRanking = (response: any) => {
  const ranking = [];
  const itemLength = response.ResultSet.totalResultsReturned;
  for (let index = 0; index < itemLength; index++) {
    const item = response.ResultSet['0'].Result[index + ''];
    ranking.push({
      code: item.Code,
      name: item.Name,
      url: item.Url,
      imageUrl: item.Image.Medium
    } as RankingType);
  }
  return ranking;
};

interface RankingState {
  category: Category | undefined;
  err: boolean;
  ranking: ReturnType<typeof getRanking> | undefined;
};

export const initialState = (injects?: RankingState): RankingState => {
  return {
    category: undefined,
    err: false,
    ranking: undefined,
  }
};

export const reducer = (state = initialState(), action: Actions): RankingState => {
  switch (action.type) {
    case 'START_REQUEST':
      return {
        category: action.payload.category,
        ranking: undefined,
        err: false
      };
    case 'RECEIVE_DATA':
      return action.payload.error
        ? { ...state, err: true }
        : { ...state, ranking: getRanking(action.payload.response) };
    default:
      return state; 
  }
};