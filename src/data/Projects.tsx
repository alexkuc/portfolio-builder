import { Types } from '../components/Schemas';
import { Link } from './links';

const PortfolioBuilder: Types['Project'] = {
  name: 'Portfolio builder',
  summary:
    'This portfolio is a builder rather than a collection of HTML elements that have been hard-coded. Data from a JSON file is fed into general-purpose, reusable components. As I would only need to update the JSON data file, I am able to easily keep my portfolio up to date.',
  links: [
    {
      name: 'Source',
      href: 'https://github.com/alexkuc/portfolio-builder',
    },
    {
      name: 'React',
      href: 'https://react.dev',
    },
    {
      name: 'TypeScript',
      href: 'https://www.typescriptlang.org',
    },
    {
      name: 'Zod',
      href: 'https://www.npmjs.com/package/zod',
    },
    {
      name: 'Sass',
      href: 'https://sass-lang.com',
    },
    {
      name: 'Vite',
      href: 'https://vitejs.dev',
    },
  ],
};

const useFilters: Types['Project'] = {
  name: 'useFilters',
  summary:
    'A React-based hook called useFilters enables filtering of arbitrary data. It is written in TypeScript in order to use generics. This hook supports nested filters, and there is no limit to the number of nesting levels. Unit tests are available too.',
  links: [
    {
      name: 'npm',
      href: 'https://www.npmjs.com/package/@alexkuc/use-filters',
    },
    {
      name: 'source',
      href: 'https://github.com/alexkuc/use-filters',
    },
    {
      name: 'React',
      href: 'https://react.dev',
    },
    {
      name: 'Lodash',
      href: 'https://lodash.com',
    },
  ],
};

const MeetingPlanner: Types['Project'] = {
  name: 'Meeting planner (private)',
  summary:
    "Users can find overlapping free time by using the Meeting Planner, a React-based SPA that supports multiple time zones. It makes use of an intuitive table-based user interface to make the process more user-friendly. This is currently in development; therefore, I haven't made it open to the general public yet.",
  links: [
    {
      name: 'React',
      href: 'https://react.dev',
    },
    {
      name: 'Mobx',
      href: 'https://mobx.js.org',
    },
    {
      name: 'Zod',
      href: 'https://www.npmjs.com/package/zod',
    },
    {
      name: 'luxon',
      href: 'https://npmjs.com/package/luxon',
    },
    {
      name: 'Lodash',
      href: 'https://lodash.com',
    },
    {
      name: 'classnames',
      href: 'https://npmjs.com/package/classnames',
    },
    {
      name: 'uuid',
      href: 'https://www.npmjs.com/package/uuid',
    },
  ],
};

const ChartJsPlugin: Types['Project'] = {
  name: 'ChartJS donut chart plugin',
  summary:
    'I discovered the chart.js plugin that offers donut charts while working on the Dashboard project. I had to create my own port of the plugin because, unfortunately, it was incompatible with v2.',
  links: [
    {
      name: 'npm',
      href: 'https://www.npmjs.com/package/chartjs-plugin-doughnutlabel-rebourne',
    },
    {
      name: 'original',
      href: 'https://github.com/ciprianciurea/chartjs-plugin-doughnutlabel',
    },
    {
      name: 'chart.js',
      href: 'https://www.npmjs.com/package/chart.js',
    },
  ],
};

const LighthouseTool: Types['Project'] = {
  name: 'Lighthouse Tool',
  summary: 'Simple Node tool to automate the creation of Lighthouse reports',
  links: [
    {
      name: 'source',
      href: 'https://github.com/alexkuc/lighthouse-tool',
    },
    {
      name: 'TypeScript',
      href: 'https://www.typescriptlang.org',
    },
  ],
};

const Export1Password: Types['Project'] = {
  name: '1Password Export',
  summary:
    'Automate the export of data from 1Password for offline backup needs',
  links: [
    {
      name: 'source',
      href: 'https://github.com/alexkuc/1password-export-js',
    },
    {
      name: '1Password',
      href: 'https://1password.com/downloads/command-line/',
    },
  ],
};

const SocietyMeetingPlanner: Types['Project'] = {
  name: 'Society Meeting Planner',
  summary:
    'A web application built with React that helps users find common free time. This is my very first React project. It was created when I was a member of the Stirling Public Speaking Society to assist the group in scheduling meetings.',
  links: [
    Link.GHPages({ repo: 'society-meeting-planner' }),
    Link.GitHub({ repo: 'society-meeting-planner' }),
    Link.React,
    Link.Bootstrap,
  ],
};

const Excel2PO: Types['Project'] = {
  name: 'Excel2PO',
  summary: 'Create .po & .mo files from Excel spreadsheet',
  links: [
    Link.GitHub({ repo: 'excel2po' }),
    Link.Packagist({ pkg: 'laravel/framework' }),
    Link.Packagist({ pkg: 'gettext/gettext' }),
    Link.Packagist({ pkg: 'guzzlehttp/guzzle' }),
    Link.Packagist({ pkg: 'phpoffice/phpspreadsheet', name: 'PHPSpreadsheet' }),
  ],
};

const WordPressComponents: Types['Project'] = {
  name: 'WordPress Components',
  summary: 'Various re-usable custom WordPress components',
  links: [
    Link.GitHub({ repo: 'wordpress-components' }),
    Link.Packagist({ pkg: 'symfony/templating', name: 'Symfony Templating' }),
  ],
};

const WordPressCI: Types['Project'] = {
  name: 'WordPress CI',
  summary:
    'Ready-to-deploy WordPress CI template with  Docker, SemaphoreCI, and WPBrowser',
  links: [
    Link.GitHub({ repo: 'wordpress-ci' }),
    Link.make('Docker', 'https://www.docker.com'),
    Link.make('SemaphoreCI', 'https://semaphoreci.com'),
    Link.Packagist({ pkg: 'codeception/codeception' }),
    Link.Packagist({ pkg: 'lucatume/wp-browser', name: 'WP-Browser' }),
  ],
};

const LastPass: Types['Project'] = {
  name: 'LastPass Scripts',
  summary: 'Bash scripts for LastPass CLI',
  links: [
    Link.GitHub({ repo: 'lpass-scripts' }),
    Link.Bash,
    Link.make(
      'LastPass',
      'https://support.logmeininc.com/lastpass/help/use-the-lastpass-command-line-application-lp040011'
    ),
  ],
};

// LATER: https://github.com/alexkuc/omnifocus-deadlines-script

// LATER: https://github.com/alexkuc/omnifocus-projects-script

// LATER: https://github.com/alexkuc/omnifocus-defer-script

// LATER: https://github.com/alexkuc/remote-dev-server-scripts

const Projects = {
  PortfolioBuilder,
  useFilters,
  MeetingPlanner,
  ChartJsPlugin,
  LighthouseTool,
  Export1Password,
  SocietyMeetingPlanner,
  Excel2PO,
  WordPressComponents,
  WordPressCI,
  LastPass,
};

export { Projects };
