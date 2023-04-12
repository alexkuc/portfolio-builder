import './contact.scss';

type Props = {};

const Contact = ({}: Props) => {
  return (
    <div className="contact">
      <a className="contact__linkedin" href="https://www.linkedin.com">
        LinkedIn
      </a>
      <a className="contact__phone" href="tel:00000000">
        Phone
      </a>
      <a className="contact__email" href="mailto:john@doe.test">
        Email
      </a>
    </div>
  );
};

export { Contact };
