import { Types } from '../../components/Schemas';
import { date } from '../data';

const WebTechLead: Types['Job'] = {
  position: 'Web Tech Lead',
  company: 'IronFX',
  start: date('01.23'),
  summary:
    'It is my duty as a web tech lead to direct technical architecture and daily technical decisions. These jobs range from routine ones like selecting a library to more involved ones like creating a website architecture and identifying the best technical options to meet specific technical requirements. I have spent practically all of my time working on the Academy project to this point.',
  projects: [
    {
      name: 'LMS project',
      points: [],
      summary: [
        "This project's focus is on offering online courses that make use of a learning management system called LearnDash. The lone person in charge of turning business logic into actual code and connecting it to internal systems is me.",
        "I played a major role in setting the project's estimation and timetable. The initial set of requirements has been divided into features and milestones by myself. Using t-shirt sizes, me and my colleagues have estimated the duration of each task using the planner poker method.",
        'The implementation of the login and registration forms made use of React, TypeScript, Formik, and a customized WP REST endpoint. This made it possible to write the isomorphic code required for SugarCRM integration between the backend and the frontend. Additional email verification was needed, and that step was also implemented using custom code.',
        'SSE, or server-sent events, were used for Google Tag Manager integration since the majority of events came from the WordPress side. The SSE implementation uses a straightforward grace lifecycle for events and concurrency locks to prevent duplicating events.',
        "I have completely reworked the implementation's security, but I've withheld the specifics to avoid unintentionally making them public.",
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
          name: 'Zod',
          href: 'https://npmjs.com/package/zod',
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

const Developer: Types['Job'] = {
  position: 'WordPress Developer',
  company: 'IronFX',
  start: date('03.21'),
  end: date('12.22'),
  summary:
    'I joined IronFX as a WordPress developer, and through learning React and TypeScript, I was able to produce bespoke widgets. In addition, I actively supported DevOps in putting the pipeline into place. This included anything from offering direction during planning sessions to helping DevOps modify nginx config files.',
  projects: [
    {
      name: 'eCommerce project',
      summary:
        'A headless WordPress prototype that was separated from wooCommerce using REST APIs to enable pipeline construction.',
      links: [
        { name: 'wooCommerce', href: 'https://woocommerce.com' },
        {
          name: 'React',
          href: 'https://react.dev',
        },
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
        'A widget that displays data from an internal API in table format. The requested data was modified and filtered using JSON middleware. A public REST endpoint was used to make it available to the front end, where React displayed it as needed.',
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
          name: 'json-mapper',
          href: 'https://packagist.org/packages/json-mapper/json-mapper',
        },
      ],
    },
    {
      name: 'Monorepo plugin',
      summary:
        "A plugin in the monorepo style that offers widgets and numerous backend features for a number of the company's brands. I was able to significantly reduce the development time by reusing common utility classes across many brands thanks to the monorepo pattern.",
    },
    {
      name: 'Seminars',
      summary:
        'A unique React plugin to provide a front-end widget for seminars with a corresponding back-end admin page',
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
        'A unique React plugin to provide a front-end webinars widget and corresponding back-end admin page',
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
        'A simple contact form created with the Gravity Forms plugin. Two emails — one for the addressee and the other for the support team — are sent after the form is submitted.',
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
        'A bulk URL update command using PHP. A third-party agency made a crucial mistake when converting a website from Drupal to Wordpress since they neglected to include a sub-folder in the path. Being a live website, changing directions would be disastrous for SEO. As a result, I created a tiny application to speed up the process rather than manually updating URLs.',
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
      summary:
        "A third-party plugin by the name of TranslatePress has inherent design flaws that would break URLs. To get around those restrictions, I created a custom plugin by reverse engineering WordPress' undocumented actions and filters.",
      links: [],
    },
    {
      name: 'Multidomain support',
      summary:
        'Only absolute URLs are supported out of the box by WordPress. This poses a challenge in terms of pipelines and staging environments. The requirement for the search-and-replace urls command was removed when I made a custom plugin that would produce root-relative urls using core WordPress actions and filters.',
      links: [],
    },
    {
      name: 'Multi-brand contact form',
      summary:
        'A working prototype of a contact form plugin that would handle numerous brands and allow for individual brand-specific overrides.',
    },
    {
      name: 'Brand-specific website',
      summary:
        'An easy-to-use static website built with the Foundation framework My first task in IronFX was this one.',
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

const IronFX = { Developer, WebTechLead };

export { IronFX };
