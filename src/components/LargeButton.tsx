export interface LargeButtonProps {
  action(): void;
  text: string;
}

export default function LargeButton(props: LargeButtonProps) {
  const { action, text } = props;

  return (
    // eslint-disable-next-line react/button-has-type
    <button className="large-button" onClick={action}>
      {text}
    </button>
  );
}
