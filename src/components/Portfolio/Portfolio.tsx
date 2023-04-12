import { Button } from '../Button/Button';
import { Card } from '../Card/Card';
import { Contact } from '../Contact/Contact';
import { Main } from '../Main/Main';
import { Photo } from '../Photo/Photo';
import { Separator } from '../Separator/Separator';
import { Sidebar } from '../Sidebar/Sidebar';
import { Text } from '../Text/Text';
import './portfolio.scss';

type Props = {};

const Portfolio = ({}: Props) => {
  return (
    <div className="portfolio">
      <Sidebar>
        <Photo />
        <Contact />
        <Separator />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pharetra dignissim enim. Mauris mattis molestie nunc eu posuere. Donec
          hendrerit quis turpis sit amet varius. Sed euismod mi velit, ut
          condimentum lorem venenatis vitae. Nulla euismod pellentesque mauris
          id maximus. In dignissim, diam et dignissim faucibus, neque ante
          venenatis arcu.
        </Text>
        <Separator />
        <Button onClick={() => 'TODO:'}>Work experience</Button>
        <Button onClick={() => 'TODO:'}>Education</Button>
        <Button onClick={() => 'TODO:'}>Training</Button>
        <Button onClick={() => 'TODO:'}>Personal projects</Button>
      </Sidebar>
      <Main>
        <Card />
      </Main>
    </div>
  );
};

export { Portfolio };
