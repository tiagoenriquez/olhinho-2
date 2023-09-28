import { MouseEvent } from 'react';
import Image from './Image';

export interface SmallButtonProps {
  action(event: MouseEvent<HTMLButtonElement>): void;
  alternativeTextOfImage: string;
  id: string;
  image: string;
  tooltip: string;
}

export default function SmallButton(props: SmallButtonProps) {
  const { action, alternativeTextOfImage, id, image, tooltip } = props;

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className="small-button"
      id={`${id}-button`}
      onClick={action}
      title={tooltip}
    >
      <Image
        alternativeText={alternativeTextOfImage}
        id={`${id}-image`}
        source={image}
      />
    </button>
  );
}
