import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.primary.dark,
      fontSize: '2rem',
      fontWeight: 'bold',
    },
  })
);

interface IQuestionTitle {
  title: string;
}
function QuestionTitle(p: IQuestionTitle) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>{p.title}</div>
    </div>
  );
}

export { QuestionTitle };
