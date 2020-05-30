import { connect, ConnectedProps } from 'react-redux';
import Nav from '../components/Nav';
import { RootState } from '../store/setupStore';

const mapState = (state: RootState) => ({
  categories: state.shopping.categories
});

const connector = connect(mapState);

export type NavPropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Nav);