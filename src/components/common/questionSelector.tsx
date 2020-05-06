import React from 'react';
import { QuestionCode, questionDict } from '../../hooks/questionStore';
import Button from '@material-ui/core/Button';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { QuestionTitle } from './Title';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: 'white',
      width: '400px',
    },
  })
);

function QuestionSelector(p: IQuestionSelector): JSX.Element {
  return (
    <>
      <QuestionTitle title={'むずかしさ を えらんでね'} />
      <Grid container direction="column" justify="center" alignItems="flex-start" spacing={1}>
        <QuestionButton code={QuestionCode.ADDING_UP_1} label={'もんだい１'} start={p.start} />
        <QuestionButton code={QuestionCode.ADDING_UP_2} label={'もんだい２'} start={p.start} />
        <QuestionButton code={QuestionCode.ADD_LV_2} label={'もんだい３'} start={p.start} />
      </Grid>
    </>
  );
}

interface IQuestionButton {
  code: QuestionCode;
  label: string;
  start: Function;
}
function QuestionButton(p: IQuestionButton) {
  const classes = useStyles();
  const info = questionDict[p.code];
  return (
    <Box m={1}>
      <Button className={classes.root} variant="contained" color="primary" onClick={() => p.start(p.code)}>
        {`${p.label} : ${info.title}`}
      </Button>
    </Box>
  );
}

interface IQuestionSelector {
  start: (QuestionCode) => void;
}

export { QuestionSelector };
