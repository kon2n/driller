import * as React from 'react';
import './NumberInput.scss';
import { ColorButton } from './ColorButton';
import { AnswerField } from './AnswerField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ICON } from '../../icon';

interface INumberInput {
  confirm: (answer: number) => void;
  addNumber: Function;
  delNumber: Function;
  numstr: string;
}
function NumberInput(p: INumberInput): JSX.Element {
  return (
    <>
      <div>
        <AnswerField value={p.numstr} />
      </div>
      <div className="number-input">
        <div className="row">
          <NumKey label="7" handleAdd={p.addNumber} />
          <NumKey label="8" handleAdd={p.addNumber} />
          <NumKey label="9" handleAdd={p.addNumber} />
        </div>
        <div className="row">
          <NumKey label="4" handleAdd={p.addNumber} />
          <NumKey label="5" handleAdd={p.addNumber} />
          <NumKey label="6" handleAdd={p.addNumber} />
        </div>
        <div className="row">
          <NumKey label="1" handleAdd={p.addNumber} />
          <NumKey label="2" handleAdd={p.addNumber} />
          <NumKey label="3" handleAdd={p.addNumber} />
        </div>
        <div className="row">
          <NumKey label="0" handleAdd={p.addNumber} />
          <EraceKey handleDel={p.delNumber} />
          <AnswerKey handleAnswetr={() => p.confirm(parseInt(p.numstr, 10))} />
        </div>
      </div>
    </>
  );
}

interface INemKey {
  label: string;
  handleAdd?: Function;
}
function NumKey(p: INemKey): JSX.Element {
  return (
    <div className="num-key" onClick={() => p.handleAdd(p.label)}>
      <ColorButton>
        <span className="label">{p.label}</span>
      </ColorButton>
    </div>
  );
}

interface IAnswerKey {
  handleAnswetr: Function;
}
function AnswerKey(p: IAnswerKey): JSX.Element {
  return (
    <div className="num-key" onClick={() => p.handleAnswetr()}>
      <ColorButton>
        <span className="label">=</span>
      </ColorButton>
    </div>
  );
}

interface IEraceKey {
  handleDel: Function;
}
function EraceKey(p: IEraceKey): JSX.Element {
  return (
    <div className="num-key" onClick={() => p.handleDel()}>
      <ColorButton>
        <FontAwesomeIcon icon={ICON.BACKSPACE} color="white" size="4x" />
      </ColorButton>
    </div>
  );
}

export { NumberInput };
