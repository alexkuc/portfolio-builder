import { v4 } from 'uuid';
import { Card } from '../Card/Card';
import { Link } from '../Link/Link';
import { Paragraph } from '../Paragraph/Paragraph';
import { Schemas, Types } from '../Schemas';
import { Separator } from '../Separator/Separator';
import './course.scss';

const Course = (props: Types['Course']) => {
  const { name, summary, links } = Schemas.Course.parse(props);

  const header = <Paragraph>{name}</Paragraph>;

  const children = (
    <>
      <Separator />
      {summary && <Paragraph>{summary}</Paragraph>}
      {links && links.length > 0 && (
        <>
          <Separator type="dashed" />
          <ul className="project__links">
            {links.map((l) => (
              <Link key={v4()} href={l.href} type="button">
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
