import { IquestionItem, QuestionCode } from '../hooks/questionStore';
import { addingUpLv1, countUp, addingUpLv2 } from './addinUp';

function createQuestionStoreState(p: IcreateQuestionStoreState): IquestionItem[] {
  switch (p.questionCode) {
    case QuestionCode.ADDING_UP_1:
      return addingUpLv1({ counts: 5 });
    case QuestionCode.ADDING_UP_2:
      return addingUpLv2({ counts: 5 });
    case QuestionCode.ADD_LV_2:
      return countUp({ baseNum: 1, counts: 10 });
    default:
      return [];
  }
}

interface IcreateQuestionStoreState {
  questionCode: QuestionCode;
}

interface IcreateCommonQuestion {
  counts: number;
}

export { createQuestionStoreState, IcreateCommonQuestion };
