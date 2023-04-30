import { Types } from '../../components/Schemas';
import { date } from '../data';

const Upwork: Types['Job'] = {
  position: 'WordPress Freelancer',
  summary:
    'I used to work as a freelance WordPress developer on Upwork. Although I have worked on a few small projects, the Dashboard plugin has been my most notable accomplishment there.',
  company: 'Upwork',
  start: date('11.20'),
  end: date('03.21'),
  projects: [
    {
      name: 'Dashboard plugin',
      summary:
        'A custom WordPress plugin that pulls Excel files from Dropbox and shows lovely charts on the dashboard interface. I used the OAuth 2.0-required Dropbox API to make the import process automatic. In order to speed up page loading, there is also a periodic background operation that refreshes data.',
      links: [
        {
          name: 'chart.js',
          href: 'https://www.npmjs.com/package/chart.js',
        },
        {
          name: 'Twig',
          href: 'https://packagist.org/packages/twig/twig',
        },
        {
          name: 'phpspreadsheet',
          href: 'https://packagist.org/packages/phpoffice/phpspreadsheet',
        },
        {
          name: 'guzzle',
          href: 'https://packagist.org/packages/guzzlehttp/guzzle',
        },
        {
          name: 'router',
          href: 'https://packagist.org/packages/rareloop/router',
        },
        {
          name: 'php-di',
          href: 'https://php-di.org',
        },
        {
          name: 'simple_html_dom',
          href: 'https://packagist.org/packages/voku/simple_html_dom',
        },
      ],
    },
  ],
};

export { Upwork };
