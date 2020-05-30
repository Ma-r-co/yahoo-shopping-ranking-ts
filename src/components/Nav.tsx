import * as React from 'react';
import { Link } from 'react-router-dom';
import { Category, Categories } from '../store/shopping/types';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, makeStyles, Theme, createStyles } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

interface NavProps {
  categories: Categories
}

const Nav: React.FC<NavProps> = (props)=> {
  const classes = useStyles();

  const to = (category: Category) => (
    category.id === '1'
    ? '/all'
    : `/category/${category.id}`
  );

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Yahoo-Shopping-Ranking-TS
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
          { props.categories.map(category => (
            <ListItem key={`nav-item-${category.id}`}>
              <Link to={to(category)}>
                {category.name}
              </Link>
            </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default Nav;