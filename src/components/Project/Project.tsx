import { v4 } from 'uuid';
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
          <div className="project__links">
            {links.map((l) => (
              <Link key={v4()} href={l.href} type="button">
                {l.name}
              </Link>
            ))}
          </div>
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

export { Project };
