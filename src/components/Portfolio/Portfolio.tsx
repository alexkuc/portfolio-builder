import classNames from 'classnames';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { v4 } from 'uuid';
import { Card, Props as CardProps } from '../Card/Card';
import { Course } from '../Course/Course';
import { Job } from '../Job/Job';
import { Link } from '../Link/Link';
import { Paragraph } from '../Paragraph/Paragraph';
import { Project } from '../Project/Project';
import { Schemas, Types } from '../Schemas';
import { Study } from '../Study/Study';
import './portfolio.scss';

const Portfolio = (props: Types['Portfolio']) => {
  const portfolio = Schemas.Portfolio.parse(props);

  const {
    info: { name, about, address, linkedin, email, phone, coverLetter },
    jobs,
    education,
    training,
    personal,
  } = portfolio;

  useEffect(() => {
    document.title = 'Portfolio of ' + name;
  }, []);

  const isTablet = useMediaQuery({
    // https://stackoverflow.com/a/51993054
    query: '(min-width: 48rem)', // 768px
  });

  return (
    <div className="portfolio">
      <h1 className="portfolio__title">{name}</h1>
      {(phone || email || linkedin || address) && (
        <div className="portfolio__contacts">
          {phone && (
            <Paragraph>
              <Link href={`tel:${phone}`}>{phone}</Link>
            </Paragraph>
          )}
          {linkedin && (
            <Paragraph>
              <Link href={linkedin}>{linkedin}</Link>
            </Paragraph>
          )}
          {email && (
            <Paragraph>
              <Link href={`mailto:${email}`}>{email}</Link>
            </Paragraph>
          )}
          {address && <Paragraph>{address}</Paragraph>}
        </div>
      )}
      <div className="portfolio__container">
        <div className="portfolio__about">
          {about &&
            Object.entries(about).map(([header, paragraph]) => (
              <ConditionalCard
                key={header}
                header={header}
                paragraph={paragraph}
                mediaQuery={isTablet}
              />
            ))}
        </div>
        {coverLetter && (
          <Card header={<H2>Cover Letter</H2>}>
            <div className="portfolio__cover-letter">
              {coverLetter.map((p) => (
                <Paragraph key={v4()}>{p}</Paragraph>
              ))}
            </div>
          </Card>
        )}
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

type ConditionalCard = {
  header: React.ReactNode;
  paragraph: React.ReactNode;
  mediaQuery: boolean;
} & Omit<CardProps, 'children'>;

const ConditionalCard = ({
  header,
  paragraph,
  mediaQuery,
  ...cardProps
}: ConditionalCard) => {
  const h2 = <H2>{header}</H2>;
  const p = <Paragraph>{paragraph}</Paragraph>;
  if (mediaQuery) {
    return (
      <>
        {h2}
        {p}
      </>
    );
  }
  if (!mediaQuery) {
    return (
      <Card {...cardProps} header={h2}>
        {p}
      </Card>
    );
  }
  return <></>; // fail-safe catch
};

export { Portfolio };
