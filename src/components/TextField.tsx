import { ChangeEvent } from 'react';

interface TextFieldProps {
  className: string;
  id: string;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
  readonly: boolean;
  type: string;
  value: string | number | null;
}

export default function TextField(props: TextFieldProps) {
  const { className, id, onChange, readonly, type } = props;
  let { value } = props;

  if (value === null) {
    value = '';
  }

  return (
    <input
      type={type}
      id={id}
      className={className}
      onChange={onChange}
      readOnly={readonly}
      value={value}
    />
  );
}
