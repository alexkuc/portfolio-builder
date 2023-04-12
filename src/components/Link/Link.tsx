import classNames from 'classnames';
import './link.scss';

type A = JSX.IntrinsicElements['a'];

type Props = {
  href: A['href'];
  children: React.ReactNode;
} & A;

const Link = ({ className, children, ...props }: Props) => {
  const css = classNames({
    link: true,
    [`${className}`]: !!className,
  });
  return (
    <a className={css} {...props}>
      {children}
    </a>
  );
};

export { Link };
