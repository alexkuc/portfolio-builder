import React from 'react';
import { v4 } from 'uuid';
import { Card } from '../Card/Card';
import { Project } from '../Project/Project';
import { Schemas, Types } from '../Schemas';
import { Separator } from '../Separator/Separator';
import './job.scss';

const Job = (props: Types['Job']) => {
  const { company, position, start, end, summary, projects } =
    Schemas.Job.parse(props);

  const header = (
    <div className="job__headers">
      <p className="job__header">{position}</p>
      <p className="job__header">{company}</p>
      <p className="job__header">
        {start.toFormat('LLL yyyy')} -{' '}
        {end ? end.toFormat('LLL yyyy') : 'current'}
      </p>
    </div>
  );

  const content = (
    <>
      <Separator />
      <p className="job__summary">{summary}</p>
      {projects.length > 0 && (
        <>
          <Separator type="dashed" />
          <div className="job__projects">
            {projects.map((p) => (
              <React.Fragment key={v4()}>
                <Project {...p} />
                <Separator type="dashed" />
              </React.Fragment>
            ))}
          </div>
        </>
      )}
    </>
  );

  return (
    <div className="job">
      <Card header={header}>{content}</Card>
    </div>
  );
};

export { Job };
