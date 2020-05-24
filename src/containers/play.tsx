import React, { useReducer, useEffect } from 'react';
import { NumberInput } from '../components/common/NumberInput';
import { QuestionLabel } from '../components/common/typograph';
import { Result } from '../components/common/Result';
import { QuestionSelector } from '../components/common/QuestionSelector';
import { useInputNumberState } from '../hooks/inputNumber';
import { questionStateStore, IquestionStoreState, ActionType, QuestionCode } from '../hooks/questionStore';
import { createQuestionStoreState } from '../logic/questionCreator';

const DEF = {
  DOC_TITLE: '算数ドリル',
};

const initialState: IquestionStoreState = {
  questions: createQuestionStoreState({ questionCode: undefined }),
  currentQuestionIdx: 0,
};

function PlaySansu(): JSX.Element {
  const [numstr, addNumber, delNumber] = useInputNumberState({ max: 3 });
  const [state, dispatch] = useReducer(questionStateStore, initialState);

  const confirm = (answer: number) => {
    delNumber(); // 入力値のクリア
    dispatch({
      type: ActionType.ACTION_CONFIRM,
      payload: { targetIdx: state.currentQuestionIdx, inputAnswer: answer },
    });
  };

  const start = (questionCode: QuestionCode): void => {
    dispatch({ type: ActionType.ACTION_START, payload: { questionCode } });
  };

  useEffect(() => {
    document.title = DEF.DOC_TITLE;
  });

  // 問題選択画面
  if (!state.info) return <QuestionSelector start={start} />;

  // 結果表示画面
  if (state.currentQuestionIdx === -1) return <Result questionStoreState={state} />;

  // 回答画面
  const q = state.questions[state.currentQuestionIdx];
  const p = { numstr, addNumber, delNumber, confirm };
  return (
    <div>
      <QuestionLabel question={q.question} answar={p.numstr} />
      <NumberInput {...p} />
    </div>
  );
}

export { PlaySansu };
