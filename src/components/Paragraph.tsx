import React from 'react';

interface ParagraphProps {
  content: string | React.JSX.Element;
}

export default function Paragraph(props: ParagraphProps) {
  const { content } = props;

  return <p>{content}</p>;
}
