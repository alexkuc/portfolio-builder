import { Card } from '../Card/Card';
import { Link } from '../Link/Link';
import { Main } from '../Main/Main';
import { Photo } from '../Photo/Photo';
import { Schemas, Types } from '../Schemas';
import { Separator } from '../Separator/Separator';
import { Text } from '../Text/Text';
import './portfolio.scss';

const Portfolio = (props: Types['Portfolio']) => {
  const {
    info: { name, intro, linkedin, email, phone },
    jobs,
    education,
    training,
    personal,
  } = Schemas.Portfolio.parse(props);

  return (
    <div className="portfolio">
      <h1 className="portfolio__title">{name}</h1>
      <div className="portfolio__sidebar">
        <Photo />
        {(linkedin || email || phone) && (
          <div className="portfolio__contacts">
            {linkedin && <Link href={linkedin}>LinkedIn</Link>}
            {email && <Link href={`mailto:${email}`}>Email</Link>}
            {phone && <Link href={`tel:${phone}`}>Phone</Link>}
          </div>
        )}
        <Separator />
        <Text>{intro}</Text>
        <Separator />
        {jobs.length > 0 && <Link href="#work">Work experience</Link>}
        {education.length > 0 && <Link href="#education">Education</Link>}
        {training.length > 0 && <Link href="#training">Training</Link>}
        {personal.length > 0 && <Link href="#personal">Personal projects</Link>}
      </div>
      <Main>
        <Card />
      </Main>
    </div>
  );
};

export { Portfolio };
