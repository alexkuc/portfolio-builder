import React from 'react';
import { v4 } from 'uuid';
import { Badge } from '../Badge/Badge';
import { Card } from '../Card/Card';
import { Link } from '../Link/Link';
import { Paragraph } from '../Paragraph/Paragraph';
import { Schemas, Types } from '../Schemas';
import { Separator } from '../Separator/Separator';
import './project.scss';

type Props = {
  showBorder?: boolean | undefined;
} & Types['Project'];

const Project = ({ showBorder = true, ...props }: Props) => {
  const { name, summary, points, links } = Schemas.Project.parse(props);

  const header = <Paragraph className="project__name">{name}</Paragraph>;

  const getSummary = () => {
    if (!summary) return [];
    if (Array.isArray(summary)) return summary;
    return [summary];
  };

  const children = (
    <>
      <Separator type="dashed" />
      {summary && (
        <div className="project__summaries">
          {getSummary().map((s) => (
            <Paragraph key={v4()} className="project__summary">
              {s}
            </Paragraph>
          ))}
        </div>
      )}
      {points && points.length > 0 && (
        <ul className="project__points">
          {points.map((p) => (
            <Point key={v4()}>{p}</Point>
          ))}
        </ul>
      )}
      {links && links.length > 0 && (
        <>
          <Separator type="dashed" />
          <div className="project__links">{ProjectLinks(links)}</div>
        </>
      )}
    </>
  );

  return (
    <div className="project">
      <Card header={header} showBorder={showBorder}>
        {(summary ||
          (points && points.length > 0) ||
          (links && links.length > 0)) &&
          children}
      </Card>
    </div>
  );
};

const Point = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="point">
      <span className="point__marker" />
      <span className="point__content">
        <Paragraph>{children}</Paragraph>
      </span>
    </li>
  );
};

const ProjectLinks = (
  links: Exclude<Types['Project']['links'], undefined>
): React.ReactNode => {
  return links.map((unknown) => {
    const isLink = Schemas.Link.safeParse(unknown);
    if (isLink.success) {
      const { name, href } = isLink.data;
      return (
        <Link key={v4()} href={href} type="button">
          {name}
        </Link>
      );
    }
    const isBadge = Schemas.Badge.safeParse(unknown);
    if (isBadge.success) {
      const { name } = isBadge.data;
      return <Badge key={v4()}>{name}</Badge>;
    }
    // default fail-safe
    return <React.Fragment key={v4()}></React.Fragment>;
  });
};

export { Project };
