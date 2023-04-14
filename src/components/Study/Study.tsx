import { Card } from '../Card/Card';
import { Schemas, Types } from '../Schemas';
import { Separator } from '../Separator/Separator';
import './study.scss';

const Study = (props: Types['Study']) => {
  const { institution, qualiftication, start, end } =
    Schemas.Study.parse(props);

  return (
    <div className="study">
      <Card>
        {institution}
        <Separator />
        {qualiftication}
        {start.toFormat('LLL')}-{end ? end.toFormat('LLL') : 'current'}
      </Card>
    </div>
  );
};

export { Study };
