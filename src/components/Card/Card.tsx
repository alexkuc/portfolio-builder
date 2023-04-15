import classNames from 'classnames';
import { useState } from 'react';
import './card.scss';

type Status = 'open' | 'closed';

type Props = {
  /** initial status */
  iStatus?: Status | undefined;
  header?: React.ReactNode;
  showBorder?: boolean | undefined;
  children: React.ReactNode | React.ReactNode[];
};

const Card = ({ iStatus, header, showBorder = false, children }: Props) => {
  const [status, setStatus] = useState<Status>(iStatus ?? 'closed');

  const toggle = () => {
    if (status === 'closed') setStatus('open');
    if (status === 'open') setStatus('closed');
  };

  const cardCss = classNames({
    card: true,
    'card--border': showBorder,
  });

  const headerCss = classNames({
    card__header: true,
    'card__header--clickable': children,
    'card__header--open': children && status === 'open',
    'card__header--closed': children && status === 'closed',
  });

  return (
    <div className={cardCss}>
      {header && (
        <div onClick={children ? toggle : undefined} className={headerCss}>
          {header}
        </div>
      )}
      {status === 'open' && children && (
        <div className="card__content">{children}</div>
      )}
    </div>
  );
};

export { Card };
