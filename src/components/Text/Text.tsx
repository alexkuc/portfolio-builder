import classNames from 'classnames';
import './text.scss';

type P = JSX.IntrinsicElements['p'];

type Props = {
  children: P;
} & P;

const Text = ({ children, className, ...props }: Props) => {
  const css = classNames({
    text: true,
    [`${className}`]: !!className,
  });
  return (
    <p className={css} {...props}>
      {children}
    </p>
  );
};

export { Text };
