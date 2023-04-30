import { Link } from '../Link/Link';
import { Paragraph } from '../Paragraph/Paragraph';
import { Types } from '../Schemas';
import { Separator } from '../Separator/Separator';
import './sidebar.scss';

const Sidebar = ({
  info: { name, photo, intro, linkedin, email, phone },
  jobs,
  education,
  training,
  personal,
}: Types['Portfolio']) => {
  return (
    <div className="sidebar">
      {photo && (
        <img
          src={photo}
          alt={name.toLowerCase() + ' photo'}
          className="sidebar__photo"
        />
      )}
      {(linkedin || email || phone) && (
        <div className="sidebar__contacts">
          {linkedin && <Link href={linkedin}>LinkedIn</Link>}
          {email && <Link href={`mailto:${email}`}>Email</Link>}
          {phone && <Link href={`tel:${phone}`}>Phone</Link>}
        </div>
      )}
      <Separator type="dashed" />
      <Paragraph className="sidebar__intro">{intro}</Paragraph>
      <Separator type="dashed" />
      <div className="sidebar__anchors">
        {jobs.length > 0 && (
          <Link
            href="#work"
            target=""
            type="button"
            className="sidebar__anchor"
          >
            Work experience
          </Link>
        )}
        {education.length > 0 && (
          <Link
            href="#education"
            target=""
            type="button"
            className="sidebar__anchor"
          >
            Education
          </Link>
        )}
        {training.length > 0 && (
          <Link
            href="#training"
            target=""
            type="button"
            className="sidebar__anchor"
          >
            Training
          </Link>
        )}
        {personal.length > 0 && (
          <Link
            href="#personal"
            target=""
            type="button"
            className="sidebar__anchor"
          >
            Personal projects
          </Link>
        )}
      </div>
    </div>
  );
};

export { Sidebar };
