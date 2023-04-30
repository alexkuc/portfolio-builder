import classNames from 'classnames';
import { useEffect } from 'react';
import { v4 } from 'uuid';
import { Course } from '../Course/Course';
import { Job } from '../Job/Job';
import { Project } from '../Project/Project';
import { Schemas, Types } from '../Schemas';
import { Study } from '../Study/Study';
import './portfolio.scss';

const Portfolio = (props: Types['Portfolio']) => {
  const portfolio = Schemas.Portfolio.parse(props);

  const {
    info: { name },
    jobs,
    education,
    training,
    personal,
  } = portfolio;

  useEffect(() => {
    document.title = 'Portfolio of ' + name;
  }, []);

  return (
    <div className="portfolio">
      <h1 className="portfolio__title">{name}</h1>
      <div className="portfolio__container">
        <div className="portfolio__content">
          {jobs.length > 0 && (
            <>
              <H2 id="work" className="portfolio__header--work">
                Work Experience
              </H2>
              <Cards>
                {jobs.map((j) => (
                  <Job key={v4()} {...j} />
                ))}
              </Cards>
            </>
          )}
          {education.length > 0 && (
            <>
              <H2 id="education">Education</H2>
              <Cards>
                {education.map((e) => (
                  <Study key={v4()} {...e} />
                ))}
              </Cards>
            </>
          )}
          {training.length > 0 && (
            <>
              <H2 id="training">Training</H2>
              <Cards>
                {training.map((t) => (
                  <Course key={v4()} {...t} />
                ))}
              </Cards>
            </>
          )}
          {personal.length > 0 && (
            <>
              <H2 id="personal">Personal Projects</H2>
              <Cards>
                {personal.map((p) => (
                  <Project key={v4()} {...p} />
                ))}
              </Cards>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

type H2 = {
  children: React.ReactNode;
} & JSX.IntrinsicElements['h2'];

const H2 = ({ children, className, ...props }: H2) => {
  const css = classNames({
    portfolio__header: true,
    [`${className}`]: !!className,
  });
  return (
    <h2 className={css} {...props}>
      {children}
    </h2>
  );
};

const Cards = ({ children }: { children: React.ReactNode[] }) => {
  return <h2 className="portfolio__cards">{children}</h2>;
};

export { Portfolio };
