import { useState } from 'react';

interface IuseInputNumberState {
  max: number; // 最大桁数
}
function useInputNumberState(p: IuseInputNumberState): [string, Function, Function] {
  const [numstr, setMessage] = useState('');

  const addNumber = (s: string): void => {
    if (numstr.length < p.max) setMessage(numstr + s);
  };

  const delNmmber = (): void => {
    setMessage('');
  };

  return [numstr, addNumber, delNmmber];
}

export { useInputNumberState };
