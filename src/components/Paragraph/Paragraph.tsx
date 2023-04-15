import classNames from 'classnames';
import React from 'react';
import './paragraph.scss';

type Props = {
  children: React.ReactNode;
} & JSX.IntrinsicElements['p'];

const Paragraph = ({ children, className, ...props }: Props) => {
  const css = classNames({
    paragraph: true,
    [`${className}`]: !!className,
  });
  return (
    <p className={css} {...props}>
      {children}
    </p>
  );
};

export { Paragraph };
