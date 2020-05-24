import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.primary.main,
    }
  })
);

interface IQuestionLabel {
  question: string;
  answar?: string;
}
export function QuestionLabel(p: IQuestionLabel): JSX.Element {
  const classes = useStyles();
  return (
    <Box textAlign="center" fontSize="h2.fontSize">
      <span>{p.question}</span>
      <span className={classes.root}>{p.answar ? p.answar : '?'}</span>
    </Box>
  );
}
