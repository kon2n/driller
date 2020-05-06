import { IcreateCommonQuestion } from './questionCreator';
import { IquestionItem } from '../hooks/questionStore';
import { getRandomInteger, IxAndY, isStored } from './util';
import { range } from 'lodash';

/**
 * 桁上がりのない足し算
 */
export function addingUpLv1(p: IcreateCommonQuestion): IquestionItem[] {
  return addingUpImpl(p.counts, 1, 5);
}

/**
 * 桁上がある足し算
 */
export function addingUpLv2(p: IcreateCommonQuestion): IquestionItem[] {
  return addingUpImpl(p.counts, 5, 10);
}

export function addingUpImpl(counts: number, min: number, max: number): IquestionItem[] {
  // 問題の作成
  const workList: IxAndY[] = [];
  let questionCounts = 0;
  while (questionCounts < counts) {
    const x = getRandomInteger(min, max);
    const y = getRandomInteger(min, max);
    if (!isStored({ x, y }, workList)) {
      workList.push({ x, y });
      questionCounts += 1;
    }
  }

  // 問題の整形
  return workList.map((o) => {
    return { question: `${o.x} + ${o.y} = `, correctAnswer: o.x + o.y };
  });
}

/**
 * 一桁の足し算
 * ＋１ずつ増えてゆく
 * １０問
 * @param p
 */
export function countUp(p: IcountUp): IquestionItem[] {
  return range(0, 9).map((n) => {
    return { question: `${p.baseNum} + ${n} = `, correctAnswer: p.baseNum + n };
  });
}

interface IcountUp extends IcreateCommonQuestion {
  baseNum: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
}
