import classNames from 'classnames';
import './separator.scss';

type Props = {
  type?: 'solid' | 'dashed' | undefined;
};

const Separator = ({ type = 'solid' }: Props) => {
  return (
    <hr
      className={classNames({
        separator: true,
        'separator--solid': type === 'solid',
        'separator--dashed': type === 'dashed',
      })}
    />
  );
};

export { Separator };
