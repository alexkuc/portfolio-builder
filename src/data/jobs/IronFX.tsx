import { Types } from '../../components/Schemas';
import { date } from '../data';

const Developer: Types['Job'] = {
  position: 'WordPress Developer',
  company: 'IronFX',
  start: date('03.21'),
  end: date('12.22'),
  summary:
    'I have joined IronFX as a WordPress developer where I have knowledge of React & TypeScript which allowed to deliver custom widgets. Not only that, I was actively helping DevOps which pipeline implementation. From the generic overview down to technical details like adjusting nginx config files.',
  projects: [
    {
      name: 'eCommerce project',
      summary:
        'A prototype of headless WordPress CMS integrated with wooCommerce to allow pipeline creation.',
      links: [
        { name: 'wooCommerce', href: 'https://woocommerce.com' },
        {
          name: 'react-router',
          href: 'https://www.npmjs.com/package/react-router',
        },
        {
          name: 'TypeScript',
          href: 'https://www.typescriptlang.org',
        },
      ],
    },
    {
      name: 'Ranking tables',
      summary:
        'A widget that displays information from internal endpoint point in a tabular data.',
      links: [
        {
          name: 'TypeScript',
          href: 'https://www.typescriptlang.org',
        },
      ],
    },
    {
      name: 'Monorepo plugin',
      summary:
        'A monorepo-style plugin that provides widgets and various backend functionality for a number of brands',
    },
    {
      name: 'Seminars',
      summary:
        'A custom React-based plugin to provide a seminars frontend widget with a matching backend admin page',
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
          name: 'Dayjs',
          href: 'https://day.js.org',
        },
        {
          name: 'Lodash',
          href: 'https://lodash.com',
        },
        {
          name: 'Vite',
          href: 'https://vitejs.dev',
        },
        {
          name: 'ACF',
          href: 'https://www.advancedcustomfields.com',
        },
        {
          name: 'phpdotenv',
          href: 'https://github.com/vlucas/phpdotenv',
        },
        {
          name: 'carbon',
          href: 'https://carbon.nesbot.com',
        },
        {
          name: 'php-di',
          href: 'https://php-di.org',
        },
      ],
    },
    {
      name: 'Webinars',
      summary:
        'A custom React-based plugin to provide a webinars frontend widget with a matching backend admin page',
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
          name: 'i18next',
          href: 'https://www.i18next.com',
        },
        {
          name: 'Dayjs',
          href: 'https://day.js.org',
        },
        {
          name: 'Lodash',
          href: 'https://lodash.com',
        },
        {
          name: 'webpack',
          href: 'https://webpack.js.org',
        },
        {
          name: 'ACF',
          href: 'https://www.advancedcustomfields.com',
        },
        {
          name: 'phpdotenv',
          href: 'https://github.com/vlucas/phpdotenv',
        },
        {
          name: 'carbon',
          href: 'https://carbon.nesbot.com',
        },
        {
          name: 'php-di',
          href: 'https://php-di.org',
        },
      ],
    },
    {
      name: 'Contact form using Gravity Forms',
      summary:
        'A straight forward contact form using Gravity Forms plugin. Upon form submission, two emails are sent out - one for the addressee and the other for the support team.',
      links: [
        {
          name: 'Twig',
          href: 'https://twig.symfony.com',
        },
        {
          name: 'Gravity Forms',
          href: 'https://www.gravityforms.com',
        },
      ],
    },
    {
      name: 'SQL parser',
      summary:
        'A PHP-based cli command to bulk update urls. When migrating a website from Drupal to Wordpress, a third party agency made a critical error where they had forgot to include a sub-folder in the path. Given that it was a live website, changing path would be catastrophic for SEO. So instead of manually update urls, I have written a small utility to speed up the process.',
      links: [
        {
          name: 'Laravel Zero',
          href: 'https://laravel-zero.com',
        },
        {
          name: 'Laravel',
          href: 'https://laravel.com',
        },
      ],
    },
    {
      name: 'TranslatePress fix',
      summary: '', // TODO:
      links: [],
    },
    {
      name: 'Multidomain support',
      summary: '', // TODO:
      links: [],
    },
    {
      name: 'Multi-brand contact form',
      summary:
        'A prototype of contact form plugin that would support various brands which flexibility to override implementation details on a per brand basis.',
    },
    {
      name: 'A website',
      summary: 'A simple static website using Foundation framework',
      links: [
        {
          name: 'Foundation',
          href: 'https://get.foundation',
        },
        {
          name: 'Sass',
          href: 'https://sass-lang.com',
        },
      ],
    },
  ],
};

const WebTechLead: Types['Job'] = {
  position: 'Web Tech Lead',
  company: 'IronFX',
  start: date('01.23'),
  summary:
    'As a Web Tech Lead, it is my responsibility to drive technical architure and day-to-day technical decisions. These activities range from mandane tasks like choosing a library to developing a website architecture and finding appropriate technical solutions to deliver given technical requirements. To date, I have been working almost my entire on the Academy project.',
  projects: [
    {
      name: 'LMS project',
      points: [],
      summary: [
        <>
          The nature of this project is to provide online learning coursesusing
          LMS or Learning Management System. I am the sole person responsible
          for implementing business logic into actual code and bridging it with
          internal systems.
        </>,
        <>
          I was the key driver behind the project timeline and estimation. I
          have broken down the initially given requirements into milestones and
          features. The approximate time for each was gauged using T-shirt sizes
          and my colleagues, who participated in the planning poker.
        </>,
        <>
          Login and registration forms were implemented using React, TypeScript,
          Formik and custom WP REST endpoint. This allowed to create isomorphic
          code between backend and frontend which was necessary for SugarCRM
          integration. It required additional email verification step which was
          also implemented using custom code.
        </>,
        <>
          Google Tag Manager integration was done using SSE or Server-sent
          events as 3/4 of the events was coming from WordPress side. SSE
          implementation features a simple concurrency lock and grace lifecycle
          for events which prevents duplicate events.
        </>,
        <>
          I have overhauled the security of the implementation but details are
          omitted to prevent accidentally exposing them to public.
        </>,
      ],
      links: [
        {
          name: 'React',
          href: 'https://react.dev',
        },
        {
          name: 'TypeScript',
          href: 'https://www.typescriptlang.org',
        },
        {
          name: 'Formik',
          href: 'https://www.npmjs.com/package/formik',
        },
        {
          name: 'MJML',
          href: 'https://mjml.io',
        },
        {
          name: 'JWT',
          href: 'https://jwt.io',
        },
        {
          name: 'SSE',
          href: 'https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events',
        },
      ],
    },
  ],
};

const IronFX = { Developer, WebTechLead };

export { IronFX };
