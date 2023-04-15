import classNames from 'classnames';
import './link.scss';

type A = JSX.IntrinsicElements['a'];

type Props = {
  href: A['href'];
  children: A['children'];
  type?: 'link' | 'button' | undefined;
} & A;

const Link = ({ className, children, type = 'link', ...props }: Props) => {
  const css = classNames({
    link: true,
    'link--link': type === 'link',
    'link--button': type === 'button',
    [`${className}`]: !!className,
  });
  return (
    <a className={css} target="_blank" {...props}>
      {children}
    </a>
  );
};

export { Link };
