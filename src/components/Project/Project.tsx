import React from 'react';
import { v4 } from 'uuid';
import { Card } from '../Card/Card';
import { Header } from '../Header/Header';
import { Link } from '../Link/Link';
import { Paragraph } from '../Paragraph/Paragraph';
import { Schemas, Types } from '../Schemas';
import { Separator } from '../Separator/Separator';
import './project.scss';

const Project = (props: Types['Project']) => {
  const { name, summary, points, links } = Schemas.Project.parse(props);

  const header = <Header>{name}</Header>;

  const children = (
    <>
      <Separator type="dashed" />
      <Paragraph>{summary}</Paragraph>
      {points.length > 0 && (
        <ul className="project__points">
          {points.map((p) => (
            <Point key={v4()}>{p}</Point>
          ))}
        </ul>
      )}
      <Separator type="dashed" />
      {links.length > 0 && (
        <div className="project__links">
          {links.map((l) => (
            <Link key={v4()} className="project__link" href={l.url}>
              {l.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );

  return (
    <div className="project">
      <Card header={header}>{children}</Card>
    </div>
  );
};

const Point = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="point">
      <span className="point__marker" />
      <span className="point__content">{children}</span>
    </li>
  );
};

export { Project };
