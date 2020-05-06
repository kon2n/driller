import React from 'react';
import { createQuestionStoreState } from '../logic/questionCreator';

interface IquestionStoreState {
  info?: IquestionInfo | undefined;
  questions: IquestionItem[];
  currentQuestionIdx: number; // 全て回答済の場合は-1
}

interface IquestionInfo {
  code: QuestionCode | undefined;
  title: string;
}

interface IquestionItem {
  question: string; // 出題文
  correctAnswer: number; // 正答
  inputAnswer?: number; // 回答
  isCorrect?: boolean; // 回答が正しかったか否か
}

interface IquestionStoreAction {
  type: ActionType;
  payload: IactionPayloadConfirm | IactionPayloadStart;
}

enum ActionType {
  ACTION_CONFIRM = 'ACTION_CONFIRM',
  ACTION_START = 'ACTION_START',
}

enum QuestionCode {
  ADDING_UP_1 = 'ADDING_UP_1',
  ADDING_UP_2 = 'ADDING_UP_2',
  ADD_LV_2 = 'ADD_LV_2',
}

interface IactionPayloadConfirm {
  targetIdx: number; // 検査対象の問題のインデックス
  inputAnswer: number; // 回答値
}

interface IactionPayloadStart {
  questionCode: QuestionCode;
}

const questionStateStore: React.Reducer<IquestionStoreState, IquestionStoreAction> = (
  state: IquestionStoreState,
  action: IquestionStoreAction
) => {
  switch (action.type) {
    case ActionType.ACTION_CONFIRM: {
      // 特定問題の答え合わせ
      const p = action.payload as IactionPayloadConfirm;
      const q = state.questions[p.targetIdx]!;
      const nextIdx = state.currentQuestionIdx + 1 < state.questions.length ? state.currentQuestionIdx + 1 : -1;
      q.inputAnswer = p.inputAnswer;
      q.isCorrect = q.correctAnswer === p.inputAnswer;
      return {
        info: state.info,
        questions: [...state.questions],
        currentQuestionIdx: nextIdx,
      };
    }
    case ActionType.ACTION_START: {
      // 新規問題開始
      const p = action.payload as IactionPayloadStart;
      return {
        info: questionDict[p.questionCode],
        questions: createQuestionStoreState({ questionCode: p.questionCode }),
        currentQuestionIdx: 0,
      };
    }
    default:
      return {
        info: state.info,
        questions: [],
        currentQuestionIdx: null,
      };
  }
};

type typeQuestionDict = { [questionCode: string]: IquestionInfo };
const questionDict: typeQuestionDict = {
  [QuestionCode.ADDING_UP_1]: {
    title: 'くりあがり の ない たしざん',
    code: QuestionCode.ADDING_UP_1,
  },
  [QuestionCode.ADDING_UP_2]: {
    title: 'くりあがり の ある たしざん',
    code: QuestionCode.ADDING_UP_2,
  },
  [QuestionCode.ADD_LV_2]: {
    title: '１０へのたしざん',
    code: QuestionCode.ADD_LV_2,
  },
};

export {
  questionStateStore,
  IquestionStoreState,
  IquestionItem,
  IquestionStoreAction,
  ActionType,
  QuestionCode,
  questionDict,
};
