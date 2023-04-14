import './header.scss';

type Props = {
  children: React.ReactNode;
};

const Header = ({ children }: Props) => {
  return <p className="header">{children}</p>;
};

export { Header };
