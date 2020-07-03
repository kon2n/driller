import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: 'white',
      fontSize: '1.5em',
    },
    text: {
      color: 'white',
      fontSize: '1.5em',
    },
  })
);

function Header(): JSX.Element {
  const classes = useStyles();
  return (
    <div className="app-header">
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title}>さんすうドリラー</Typography>
          <Button color="inherit" className={classes.text}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export { Header };
