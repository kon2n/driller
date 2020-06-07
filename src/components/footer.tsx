import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
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
    <Box borderTop={1} borderColor={grey[300]}>
      <BottomNavigation>
        <BottomNavigationAction label="Recents" icon={<Home fontSize="large" />} classes={classes} />
        <BottomNavigationAction label="Recents" icon={<School fontSize="large" />} classes={classes} />
        <BottomNavigationAction
          label="Recents"
          icon={<FontAwesomeIcon icon={ICON.DUNGEON} size="2x" />}
          classes={classes}
        />
        <BottomNavigationAction
          label="Recents"
          icon={<FontAwesomeIcon icon={ICON.CHART} size="2x" />}
          classes={classes}
        />
      </BottomNavigation>
    </Box>
  );
}
