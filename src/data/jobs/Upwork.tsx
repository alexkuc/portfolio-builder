import { Types } from '../../components/Schemas';
import { date } from '../data';

const Upwork: Types['Job'] = {
  position: 'WordPress Freelancer',
  summary:
    'For some time, I have worked as a WordPress freelancer on a platform called Upwork. While I have worked on several small projects, my biggest accomplishment here is the Dashboard plugin.',
  company: 'Upwork',
  start: date('11.20'),
  end: date('03.21'),
  projects: [
    {
      name: 'Dashboard plugin',
      summary:
        'A custom WordPress plugin that fetches Excel spreadsheets from Dropbox and displays beautiful charts on the dashboard interface. To make the import process unattended, I have used Dropbox API that requires OAuth2.0. Furthermore, there is a period background process to refresh data to speed up page loading.',
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
