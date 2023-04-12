import './photo.scss';

type Props = {};

const Photo = ({}: Props) => {
  return (
    <div className="photo">
      <img
        className="photo__image"
        src="http://placehold.it/350x450"
        alt="photo"
      />
    </div>
  );
};

export { Photo };
