interface LinkProps {
  address: string;
  text: string;
}

export default function Link(props: LinkProps) {
  const { address, text } = props;

  return (
    <a href={address} target="_blank" rel="noreferrer">
      {text}
    </a>
  );
}
