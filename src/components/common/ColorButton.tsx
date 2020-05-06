import { withStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const ColorButton = withStyles((theme: Theme) => ({
  root: {
    width: 80,
    height: 80,
    margin: '0.5em',
    border: 'solid 0px blue',
    'border-radius': '1em',
    color: theme.palette.getContrastText(theme.palette.primary.main),
    backgroundColor: theme.palette.primary.light,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
}))(Button);

export { ColorButton };
