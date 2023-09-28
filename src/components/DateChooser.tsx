import { ChangeEvent } from 'react';

interface DateChooserProps {
  date: string;
  id: string;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
  readonly: boolean;
}

export default function DateChooser(props: DateChooserProps) {
  const { date, id, onChange, readonly } = props;

  return (
    <input
      type="string"
      id={id}
      onChange={onChange}
      readOnly={readonly}
      title="Digite apenas números."
      value={date}
    />
  );
}
