import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Ranking from './containers/Ranking';
import Nav from './containers/Nav';
import { makeStyles, createStyles, Theme, CssBaseline} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
  }),
);

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline/>
      <Nav />
      <Switch>
        <Route path="/all" component={Ranking} />
        <Route path="/category/1" render={() => <Redirect to='/all'/>}/>
        <Route
          path="/category/:id"
          render={
            ({ match }): React.ReactElement => <Ranking categoryId={match.params.id} />
          }
        />
      </Switch>
    </div>
  );
}

export default App;
