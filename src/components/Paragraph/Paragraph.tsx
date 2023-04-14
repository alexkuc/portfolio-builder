import React from 'react';
import './paragraph.scss';

type Props = {
  children: React.ReactNode;
};

const Paragraph = ({ children }: Props) => {
  return <p className="paragraph">{children}</p>;
};

export { Paragraph };
