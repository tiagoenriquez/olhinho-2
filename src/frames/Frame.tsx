import React from 'react';

interface FrameProps {
  children: Array<React.JSX.Element | null>;
}

export default function Frame(props: FrameProps) {
  const { children } = props;

  return <div className="frame">{children}</div>;
}
