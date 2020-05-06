import React from 'react';
import { IquestionStoreState, IquestionItem } from '../../hooks/questionStore';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ICON } from '../../icon';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.primary.main,
    },
    headText: {
      color: theme.palette.common.white,
      fontSize: '1.2em',
    },
  })
);

interface IResult {
  questionStoreState: IquestionStoreState;
}
function Result(p: IResult): JSX.Element {
  return (
    <>
      <Typography variant="h6">けっか</Typography>
      <ResultTable items={p.questionStoreState.questions} />
    </>
  );
}

interface IResultTable {
  items: IquestionItem[];
}
function ResultTable(p: IResultTable): JSX.Element {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell className={classes.headText} align="left">
              もんだい
            </TableCell>
            <TableCell className={classes.headText} align="right">
              かいとう
            </TableCell>
            <TableCell className={classes.headText} align="right">
              せいかい
            </TableCell>
            <TableCell className={classes.headText} align="right">
              けっか
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{p.items.map((item, idx) => ResutlTableItem(item, idx))}</TableBody>
      </Table>
    </TableContainer>
  );
}

function ResutlTableItem(item: IquestionItem, key: number): JSX.Element {
  return (
    <TableRow key={key}>
      <TableCell align="left">{item.question}</TableCell>
      <TableCell align="right">{item.inputAnswer ? item.inputAnswer : '?'}</TableCell>
      <TableCell align="right">{item.correctAnswer}</TableCell>
      <TableCell align="right">
        <OneResult isCorrect={item.inputAnswer === item.correctAnswer} />
      </TableCell>
    </TableRow>
  );
}

interface IOneResult {
  isCorrect: boolean;
}
function OneResult(p: IOneResult): JSX.Element {
  return p.isCorrect ? <Good /> : <Bad />;
}

function Good(): JSX.Element {
  return <FontAwesomeIcon icon={ICON.GOOD} color="green" size="2x" fixedWidth />;
}

function Bad(): JSX.Element {
  return <FontAwesomeIcon icon={ICON.BAD} color="red" size="2x" fixedWidth />;
}

export { Result };
