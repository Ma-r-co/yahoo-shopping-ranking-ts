import { connect, ConnectedProps } from 'react-redux';
import Ranking from '../components/Ranking';
import { RootState } from '../store/setupStore';
import { ThunkDispatch } from 'redux-thunk';
import * as actions from '../actions/Ranking';
import { Actions } from '../store/actions';

interface RankingOwnProps {
  categoryId: string
}

const mapState = (state: RootState, ownProps: RankingOwnProps) => ({
  categoryId: ownProps.categoryId,
  category: state.ranking.category,
  ranking: state.ranking.ranking,
  error: state.ranking.err
});

const mapDispatch = (dispatch: ThunkDispatch<RootState, null, Actions>) => ({
  onChange (categoryId: string) {
    dispatch(actions.fetchRanking(categoryId));
  }
})

const connector = connect(mapState, mapDispatch);
export type RankingPropsFromRedux = ConnectedProps<typeof connector>
export default connector(Ranking);
