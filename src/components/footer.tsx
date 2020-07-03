import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import grey from '@material-ui/core/colors/grey';
import Home from '@material-ui/icons/Home';
import School from '@material-ui/icons/School';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ICON } from '../icon';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.primary.main,
    },
  })
);

export function Footer() {
  const classes = useStyles();
  return (
    <div className="app-footer">
      <Box borderTop={1} borderColor={grey[300]}>
        <BottomNavigation>
          <BottomNavigationAction
            component={Link}
            to="/"
            label="home"
            icon={<Home fontSize="large" />}
            classes={classes}
          />
          <BottomNavigationAction
            component={Link}
            to="/play"
            label="play"
            icon={<School fontSize="large" />}
            classes={classes}
          />
          <BottomNavigationAction
            component={Link}
            to="/page2"
            label="dummy"
            icon={<FontAwesomeIcon icon={ICON.DUNGEON} size="2x" />}
            classes={classes}
          />
          <BottomNavigationAction
            component={Link}
            to="/page3"
            label="dummy"
            icon={<FontAwesomeIcon icon={ICON.CHART} size="2x" />}
            classes={classes}
          />
        </BottomNavigation>
      </Box>
    </div>
  );
}
