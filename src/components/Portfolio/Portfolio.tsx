import { Main } from '../Main/Main';
import { Sidebar } from '../Sidebar/Sidebar';
import './portfolio.scss';

type Props = {};

const Portfolio = ({}: Props) => {
  return (
    <div className="portfolio">
      <Sidebar />
      <Main />
    </div>
  );
};

export { Portfolio };
