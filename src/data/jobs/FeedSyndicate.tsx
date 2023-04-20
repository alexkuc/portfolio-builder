import { Types } from '../../components/Schemas';
import { date } from '../data';

const FeedSyndicate: Types['Job'] = {
  position: 'WordPress Developer',
  company: 'FeedSyndicate',
  summary:
    'My very first client and project as a starting WordPress freelancer. I was able to land this contract before I have started my higher education. When my university has started, I have continued to work on this contract part-time.',
  start: date('11.14'),
  end: date('11.16'),
  projects: [
    {
      name: 'Status page plugin',
      summary:
        'A simple WordPress plugin that peridocally pulls MySQL information from cacti and displays that information in a user-friendly manner. Basically, it is a very simple status page for non-technical users.',
    },
    {
      name: 'FeedSyndicate',
      summary:
        'A WordPress plugin that calls public endpoint, fetches RSS data from it and parses (imports) it as WordPress that can be mapped to custom categories. Please keep in mind that at the time I was working on the plugin, it was in good standing and had 4+ stars reviews for it.',
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
