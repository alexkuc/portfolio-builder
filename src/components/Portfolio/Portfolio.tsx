import { v4 } from 'uuid';
import { Job } from '../Job/Job';
import { Link } from '../Link/Link';
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
      <div className="portfolio__content">
        {jobs.length > 0 && (
          <>
            <h2 className="portfolio__subtitle">Work Experience</h2>
            {jobs.map((j) => (
              <Job key={v4()} {...j} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export { Portfolio };
