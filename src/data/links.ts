import { Types } from '../components/Schemas';

const make = (name: string, href: string): Types['Link'] => ({
  name,
  href,
});

const React = make('React', 'https://react.dev/');

const Bootstrap = make('Bootstrap', 'https://getbootstrap.com/');

const TypeScript = make('TypeScript', 'https://www.typescriptlang.org/');

const npm = ({ pkg, name = pkg }: { pkg: string; name?: string | undefined }) =>
  make(name, `https://npmjs.com/package/${pkg}`);

const GitHub = ({
  repo,
  name = 'source',
  user = 'alexkuc',
}: {
  repo: string;
  name?: string | undefined;
  user?: string | undefined;
}) => make(name, `https://github.com/${user}/${repo}`);

const GHPages = ({
  repo,
  name = 'demo',
  user = 'alexkuc',
}: {
  repo: string;
  name?: string | undefined;
  user?: string | undefined;
}) => make(name, `https://${user}.github.io/${repo}`);

const Packagist = ({
  pkg,
  name = pkg,
}: {
  pkg: string;
  name?: string | undefined;
}) => make(name, `https://packagist.org/packages/${pkg}`);

const Link = {
  make,
  React,
  Bootstrap,
  TypeScript,
  npm,
  Packagist,
  GitHub,
  GHPages,
};

export { Link };
