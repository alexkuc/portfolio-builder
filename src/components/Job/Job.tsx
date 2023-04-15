import React from 'react';
import { v4 } from 'uuid';
import { Card } from '../Card/Card';
import { Paragraph } from '../Paragraph/Paragraph';
import { Project } from '../Project/Project';
import { Schemas, Types } from '../Schemas';
import { Separator } from '../Separator/Separator';
import './job.scss';

const Job = (props: Types['Job']) => {
  const {
    company,
    position,
    start,
    end,
    summary,
    projects = [],
  } = Schemas.Job.parse(props);

  const header = (
    <div className="job__headers">
      <Paragraph className="job__header job__header--position">
        {position}
      </Paragraph>
      <Paragraph className="job__header job__header--company">
        {company}
      </Paragraph>
      <Paragraph className="job__header job__header--dates">
        {start.toFormat('LLL yyyy')} -{' '}
        {end ? end.toFormat('LLL yyyy') : 'current'}
      </Paragraph>
    </div>
  );

  const content = (
    <>
      <Separator />
      <Paragraph>{summary}</Paragraph>
      {projects.length > 0 && (
        <>
          <Separator type="dashed" />
          <div className="job__projects">
            {projects.map((p) => (
              <React.Fragment key={v4()}>
                <Project {...p} showBorder={false} />
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
      <Card header={header} showBorder={true}>
        {content}
      </Card>
    </div>
  );
};

export { Job };
