import { v4 } from 'uuid';
import { Card } from '../Card/Card';
import { Link } from '../Link/Link';
import { Schemas, Types } from '../Schemas';
import { Separator } from '../Separator/Separator';
import './project.scss';

const Project = (props: Types['Project']) => {
  const { name, summary, points, links } = Schemas.Project.parse(props);

  const header = (
    <>
      <p className="project__title">{name}</p>
      <Separator />
    </>
  );

  const children = (
    <>
      <div className="project">
        <p className="project__summary">{summary}</p>
        {points.length > 0 && (
          <ul className="project__points">
            {points.map((p) => (
              <li key={v4()} className="project__point">
                {p}
              </li>
            ))}
          </ul>
        )}
        <Separator />
        {links.length > 0 && (
          <div className="project__links">
            {links.map((l) => (
              <Link key={v4()} href={l.url}>
                {l.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );

  return <Card header={header}>{children}</Card>;
};

export { Project };
