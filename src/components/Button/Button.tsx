import classNames from 'classnames';
import './button.scss';

type Button = JSX.IntrinsicElements['button'];

type Props = {
  onClick: Button['onClick'];
  children: Button['children'];
} & Button;

const Button = ({ children, className, ...props }: Props) => {
  const css = classNames({
    button: true,
    [`${className}`]: !!className,
  });
  return (
    <button className={css} {...props}>
      {children}
    </button>
  );
};

export { Button };
