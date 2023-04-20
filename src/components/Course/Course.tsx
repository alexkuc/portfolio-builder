import { v4 } from 'uuid';
import { Card } from '../Card/Card';
import { Link } from '../Link/Link';
import { Paragraph } from '../Paragraph/Paragraph';
import { Schemas, Types } from '../Schemas';
import { Separator } from '../Separator/Separator';
import './course.scss';

const Course = (props: Types['Course']) => {
  const { name, summary, completion, links } = Schemas.Course.parse(props);

  const header = <Paragraph>{name}</Paragraph>;

  const children = (
    <>
      <Separator type="dashed" />
      {summary && <Paragraph>{summary}</Paragraph>}
      {completion && (
        <Paragraph className="course__completition">
          Completed on {completion.toFormat('dd LLL yyyy')}
        </Paragraph>
      )}
      {summary && links && links.length > 0 && <Separator type="dashed" />}
      {links && links.length > 0 && (
        <>
          {(summary || completion) && <Separator type="dashed" />}
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
