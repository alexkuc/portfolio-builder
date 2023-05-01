import classNames from 'classnames';
import './badge.scss';

type div = JSX.IntrinsicElements['div'];

type Badge = {
  children: div['children'];
} & div;

const Badge = ({ children }: Badge) => {
  const css = classNames({
    badge: true,
  });
  return <div className={css}>{children}</div>;
};

export { Badge };
