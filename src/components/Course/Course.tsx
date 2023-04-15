import { v4 } from 'uuid';
import { Card } from '../Card/Card';
import { Link } from '../Link/Link';
import { Schemas, Types } from '../Schemas';
import { Separator } from '../Separator/Separator';
import './course.scss';

const Course = (props: Types['Course']) => {
  const { name, summary, links } = Schemas.Course.parse(props);

  const header = <p className="course__title">{name}</p>;

  const children = (
    <>
      <p className="project__summary">{summary}</p>
      {links.length > 0 && (
        <>
          <Separator />
          <ul className="project__links">
            {links.map((l) => (
              <Link key={v4()} href={l.url}>
                {l.name}
              </Link>
            ))}
          </ul>
        </>
      )}
    </>
  );

  return (
    <div className="course">
      <Card header={header} showBorder={true}>
        {children}
      </Card>
    </div>
  );
};

export { Course };
