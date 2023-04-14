import { useState } from 'react';
import { Link } from '../Link/Link';
import { Separator } from '../Separator/Separator';
import { Text } from '../Text/Text';
import './card.scss';

type Status = 'open' | 'closed';

type Props = {
  /** initial status */
  iStatus?: Status | undefined;
  header?: React.ReactNode;
  children: React.ReactNode | React.ReactNode[];
};

const Card = ({ iStatus, ...props }: Props) => {
  const [status, setStatus] = useState<Status>(iStatus ?? 'closed');
  const toggle = () => {
    if (status === 'closed') setStatus('open');
    if (status === 'open') setStatus('closed');
  };
  return (
    <div className="card">
      <div onClick={toggle} className="card__header">
        <div className="card__title">Position</div>
        <div className="card__title">Company</div>
        <div className="card__title">Mon Year Mon - Year</div>
      </div>
      {status === 'open' && (
        <div className="card__body">
          <div className="card__subtitle">Project A</div>
          <Separator />
          <Text className="text--card">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            tempor ex vitae tortor pulvinar, ac hendrerit metus pellentesque.
            Vivamus nunc mauris, consequat at rutrum et.
          </Text>
          <Separator />
          <ul className="card__list">
            <li className="card__point">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </li>
            <li className="card__point">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </li>
            <li className="card__point">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </li>
            <li className="card__point">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </li>
            <li className="card__point">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </li>
          </ul>
          <Separator />
          <div className="card__links">
            <Link href="https://www.npmjs.com/package">Library A</Link>
            <Link href="https://www.npmjs.com/package">Library B</Link>
            <Link href="https://www.npmjs.com/package">Library C</Link>
            <Link href="https://www.npmjs.com/package">Library D</Link>
            <Link href="https://www.npmjs.com/package">Library E</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export { Card };
