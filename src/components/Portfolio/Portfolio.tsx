import { Main } from '../Main/Main';
import { Sidebar } from '../Sidebar/Sidebar';
import './portfolio.scss';

type Params = {};

const Portfolio = ({}: Params) => {
  return (
    <div className="portfolio">
      <Sidebar />
      <Main />
    </div>
  );
};

export { Portfolio };
