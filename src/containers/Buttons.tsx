import LargeButton, { LargeButtonProps } from 'components/LargeButton';

interface ButtonsProps {
  buttons: Array<LargeButtonProps>;
}

export default function Buttons(props: ButtonsProps) {
  const { buttons } = props;

  return (
    <div className="row-container">
      {buttons.map((button) => (
        <LargeButton
          action={button.action}
          text={button.text}
          key={button.text}
        />
      ))}
    </div>
  );
}
