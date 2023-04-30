import { Types } from '../components/Schemas';

const portfolioBuilder: Types['Project'] = {
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

const meetingPlanner: Types['Project'] = {
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

const chartJsPlugin: Types['Project'] = {
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
