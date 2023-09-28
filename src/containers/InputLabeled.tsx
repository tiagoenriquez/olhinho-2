import DateChooser from 'components/DateChooser';
import TextField from 'components/TextField';
import { ChangeEvent } from 'react';

interface InputLabeledProps {
  id: string;
  label: string;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
  readonly: boolean;
  type: string;
  value: number | string;
}

export default function InputLabeled(props: InputLabeledProps) {
  const { id, label, onChange, readonly, type, value } = props;

  return (
    <div className="row-container">
      <label htmlFor={id}>{label}</label>
      {type === 'date' ? (
        <DateChooser
          date={value.toString()}
          id={id}
          onChange={onChange}
          readonly={readonly}
        />
      ) : (
        <TextField
          id={id}
          className={`${type}-field`}
          onChange={onChange}
          readonly={readonly}
          type={type}
          value={value}
        />
      )}
    </div>
  );
}
