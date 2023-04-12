import classNames from 'classnames';
import './main.scss';

type Div = JSX.IntrinsicElements['div'];

type Props = {
  children: Div['children'];
} & Div;

const Main = ({ children, className, ...props }: Props) => {
  const css = classNames({
    main: true,
    [`${className}`]: className,
  });
  return (
    <div className={css} {...props}>
      {children}
    </div>
  );
};

export { Main };
