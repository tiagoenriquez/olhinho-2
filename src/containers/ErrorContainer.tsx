import SmallButton from 'components/SmallButton';
import closeImage from '../assets/close.png';

interface ErrorContainerProps {
  close(): void;
  message: string;
}

export default function ErrorContainer(props: ErrorContainerProps) {
  const { close, message } = props;

  return (
    <div className="error">
      <p>{message}</p>
      <SmallButton
        action={close}
        alternativeTextOfImage="X"
        id="close"
        image={closeImage}
        tooltip="Fecha mensagem de erro"
      />
    </div>
  );
}
