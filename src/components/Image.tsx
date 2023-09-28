export interface ImageProps {
  source: string;
  alternativeText: string;
  id: string;
}

export default function Image(props: ImageProps) {
  const { source, alternativeText, id } = props;

  return <img src={source} alt={alternativeText} id={id} />;
}
