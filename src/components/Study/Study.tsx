import { Card } from '../Card/Card';
import { Paragraph } from '../Paragraph/Paragraph';
import { Schemas, Types } from '../Schemas';
import { Separator } from '../Separator/Separator';
import './study.scss';

const Study = (props: Types['Study']) => {
  const { institution, qualiftication, start, end } =
    Schemas.Study.parse(props);

  return (
    <div className="study">
      <Card iStatus="open">
        <Paragraph>{institution}</Paragraph>
        <Separator type="dashed" />
        <Paragraph>{qualiftication}</Paragraph>
        <Paragraph>
          {start.toFormat('LLL yyyy')} -{' '}
          {end ? end.toFormat('LLL yyyy') : 'current'}
        </Paragraph>
      </Card>
    </div>
  );
};

export { Study };
