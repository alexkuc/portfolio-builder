import { Types } from '../../components/Schemas';
import { date } from '../data';

const FeedSyndicate: Types['Job'] = {
  position: 'WordPress Developer',
  company: 'FeedSyndicate',
  summary:
    'My first assignment and client as a fledgling WordPress freelancer. Before I began my college studies, I was able to secure this contract. I have continued to work on this contract part-time since the start of my undergraduate studies.',
  start: date('11.14'),
  end: date('11.16'),
  projects: [
    {
      name: 'Status page plugin',
      summary:
        'A straightforward WordPress plugin that periodically extracts MySQL data from cacti and presents the data in a user-friendly manner. For non-technical users, it basically just serves as a status page.',
    },
    {
      name: 'FeedSyndicate',
      summary:
        'A plugin for WordPress that makes calls to public endpoints, retrieves RSS feeds from them, and parses (imports) the data so that it can be assigned to specific categories Please remember that the plugin was in good standing and had received reviews with four or more stars at the time I was working on it.',
      links: [
        {
          name: 'Link',
          href: 'https://wordpress.org/plugins/feedsyndicate-newsml-importer/',
        },
        {
          name: 'simplepie',
          href: 'https://packagist.org/packages/simplepie/simplepie',
        },
      ],
    },
  ],
};

export { FeedSyndicate };
