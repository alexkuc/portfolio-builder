import classNames from 'classnames';
import { useState } from 'react';
import './card.scss';

type Status = 'open' | 'closed';

type Props = {
  /** initial status */
  iStatus?: Status | undefined;
  header?: React.ReactNode;
  children: React.ReactNode | React.ReactNode[];
};

const Card = ({ iStatus, header, children }: Props) => {
  const [status, setStatus] = useState<Status>(iStatus ?? 'closed');

  const toggle = () => {
    if (status === 'closed') setStatus('open');
    if (status === 'open') setStatus('closed');
  };

  const headerCss = classNames({
    card__header: true,
    'card__header--open': status === 'open',
    'card__header--closed': status === 'closed',
  });

  return (
    <div className="card">
      {header && (
        <div onClick={toggle} className={headerCss}>
          {header}
        </div>
      )}
      {status === 'open' && <div className="card__content">{children}</div>}
    </div>
  );
};

export { Card };
