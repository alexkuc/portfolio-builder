import { v4 } from 'uuid';
import { Course } from '../Course/Course';
import { Job } from '../Job/Job';
import { Link } from '../Link/Link';
import { Project } from '../Project/Project';
import { Schemas, Types } from '../Schemas';
import { Separator } from '../Separator/Separator';
import { Study } from '../Study/Study';
import { Text } from '../Text/Text';
import './portfolio.scss';

const Portfolio = (props: Types['Portfolio']) => {
  const {
    info: { name, photo, intro, linkedin, email, phone },
    jobs,
    education,
    training,
    personal,
  } = Schemas.Portfolio.parse(props);

  return (
    <div className="portfolio">
      <h1 className="portfolio__title">{name}</h1>
      <div className="portfolio__sidebar">
        {photo && (
          <img
            src={photo}
            alt={name.toLowerCase() + ' photo'}
            className="portfolio__photo"
          />
        )}
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
            <Header>Work Experience</Header>
            <Cards>
              {jobs.map((j) => (
                <Job key={v4()} {...j} />
              ))}
            </Cards>
          </>
        )}
        {education.length > 0 && (
          <>
            <Header>Education</Header>
            <Cards>
              {education.map((e) => (
                <Study key={v4()} {...e} />
              ))}
            </Cards>
          </>
        )}
        {training.length > 0 && (
          <>
            <Header>Training</Header>
            <Cards>
              {training.map((t) => (
                <Course key={v4()} {...t} />
              ))}
            </Cards>
          </>
        )}
        {personal.length > 0 && (
          <>
            <Header>Personal Projects</Header>
            <Cards>
              {personal.map((p) => (
                <Project key={v4()} {...p} />
              ))}
            </Cards>
          </>
        )}
      </div>
    </div>
  );
};

const Header = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="portfolio__header">{children}</h2>;
};

const Cards = ({ children }: { children: React.ReactNode[] }) => {
  return <h2 className="portfolio__cards">{children}</h2>;
};

export { Portfolio };
