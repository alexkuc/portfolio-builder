import { Types } from '../components/Schemas';

const portfolioBuilder: Types['Project'] = {
  name: 'Portfolio builder',
  summary:
    'This portfolio is not a collection of hard-coded HTML elements but rather a builder. There are common purpose re-usable components which are fed data from JSON file. This allows me to easily keep my portfolio up-to-date as I would need to update only JSON data file.',
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
    'useFilters is a React-based hook that allows to filter arbitary data. It is written in TypeScript to take advantage of generics. The hook is scalable as it supports nested filters and arbitary data type as well as filters. Implementation has also unit tests.',
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

const meetingPlanner: Types['Project'] = {
  name: 'Meeting planner (private)',
  summary:
    'Meeting planner is a React-based SPA that allows multiple people in multiple timezones to find overlapping available time. To make the process user-friendly, for each user, you just click on a table to mark specific time slot as available. This is currently in-active development which is why I did not make this publically available yet.',
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

const chartJsPlugin: Types['Project'] = {
  name: 'ChartJS donut chart plugin',
  summary:
    'When working on Dashboard project, I have come across chart.js plugin that provides donut charts. Unfortunately, it was not compatible with v2 so I had to do my own port of the plugin',
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

// LATER: https://github.com/alexkuc/lighthouse-tool

// LATER: https://github.com/alexkuc/1password-export-js

// LATER: https://github.com/alexkuc/society-meeting-planner

// LATER: https://github.com/alexkuc/excel2po

// LATER: https://github.com/alexkuc/wordpress-components

// LATER: https://github.com/alexkuc/wordpress-ci

// LATER: https://github.com/alexkuc/lpass-scripts

// LATER: https://github.com/alexkuc/omnifocus-deadlines-script

// LATER: https://github.com/alexkuc/omnifocus-projects-script

// LATER: https://github.com/alexkuc/omnifocus-defer-script

// LATER: https://github.com/alexkuc/remote-dev-server-scripts

const Projects = {
  portfolioBuilder,
  useFilters,
  meetingPlanner,
  chartJsPlugin,
};

export { Projects };
