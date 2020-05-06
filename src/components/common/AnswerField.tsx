import React from 'react';
import TextField from '@material-ui/core/TextField';

const inputProps = {
  color: 'primary',
};

interface IAnswerFieldProps {
  value: string;
}
export function AnswerField(p: IAnswerFieldProps) {
  return <TextField label="こたえ" variant="outlined" value={p.value} inputProps={inputProps} />;
}
