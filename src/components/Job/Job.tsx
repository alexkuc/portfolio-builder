import { v4 } from 'uuid';
import { Card } from '../Card/Card';
import { Project } from '../Project/Project';
import { Schemas, Types } from '../Schemas';
import './job.scss';

const Job = (props: Types['Job']) => {
  const { company, position, start, end, summary, projects } =
    Schemas.Job.parse(props);

  const header = (
    <div className="job__header-container">
      <p className="job__header">{position}</p>
      <p className="job__header">{company}</p>
      <p className="job__header">
        {start.toFormat('LLL yyyy')} -{' '}
        {end ? end.toFormat('LLL yyyy') : 'current'}
      </p>
    </div>
  );

  return (
    <div className="job">
      <Card header={header}>
        <p className="job__summary">{summary}</p>
        {projects.length > 0 && (
          <div className="job__projects">
            {projects.map((p) => (
              <Project key={v4()} {...p} />
            ))}
          </div>
        )}
      </Card>
    </div>
  );
};

export { Job };
