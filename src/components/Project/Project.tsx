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

  const header = <Paragraph>{name}</Paragraph>;

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
            <Link key={v4()} href={l.url} type="button">
              {l.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );

  return (
    <div className="project">
      <Card header={header} showBorder={showBorder}>
        {children}
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
