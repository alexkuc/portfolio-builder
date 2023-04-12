import './sidebar.scss';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const Sidebar = ({ children }: Props) => {
  return <div className="sidebar">{children}</div>;
};

export { Sidebar };
