import { Card } from '../Card/Card';
import { Project } from '../Project/Project';
import { Schemas, Types } from '../Schemas';
import './job.scss';

const Job = (props: Types['Job']) => {
  const { company, position, start, end, summary, projects } =
    Schemas.Job.parse(props);

  const header = (
    <div className="job__header">
      {position}
      {company}
      {start.toFormat('LLL')}-{end ? end.toFormat('LLL') : 'current'}
    </div>
  );

  return (
    <div className="job">
      <Card header={header}>
        <p className="job__summary">{summary}</p>
        {projects.length > 0 && (
          <div className="job__projects">
            {projects.map((p) => (
              <Project {...p} />
            ))}
          </div>
        )}
      </Card>
    </div>
  );
};

export { Job };
