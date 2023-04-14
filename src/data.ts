import { DateTime } from 'luxon';
import { Types } from './components/Schemas';

const data: Types['Portfolio'] = {
  info: {
    name: 'Jane Doe',
    intro:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra dignissim enim. Mauris mattis molestie nunc eu posuere. Donec hendrerit quis turpis sit amet varius. Sed euismod mi velit, ut condimentum lorem venenatis vitae. Nulla euismod pellentesque mauris id maximus. In dignissim, diam et dignissim faucibus, neque ante venenatis arcu.',
    linkedin: 'http://linkedin.com/in/jane.doe/',
    phone: '+0123456789',
    email: 'jane.doe@test.test',
  },
  jobs: [
    {
      position: 'Position A',
      company: 'Acme Inc.',
      start: DateTime.fromFormat('15.01.20', 'dd.MM.yy'),
      end: DateTime.fromFormat('15.06.20', 'dd.MM.yy'),
      summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at vulputate urna. In faucibus lorem nec elementum sagittis. Nulla facilisi. Mauris congue felis non ante blandit, ut luctus turpis feugiat.',
      projects: [
        {
          name: 'Project A',
          summary:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor ex vitae tortor pulvinar, ac hendrerit metus pellentesque. Vivamus nunc mauris, consequat at rutrum et.',
          points: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          ],
          links: [
            {
              name: 'Library A',
              url: 'https://www.npmjs.com/package/library-a',
            },
            {
              name: 'Library B',
              url: 'https://www.npmjs.com/package/library-b',
            },
            {
              name: 'Library C',
              url: 'https://www.npmjs.com/package/library-c',
            },
            {
              name: 'Library D',
              url: 'https://www.npmjs.com/package/library-d',
            },
            {
              name: 'Library E',
              url: 'https://www.npmjs.com/package/library-e',
            },
          ],
        },
        {
          name: 'Project B',
          summary:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor ex vitae tortor pulvinar, ac hendrerit metus pellentesque. Vivamus nunc mauris, consequat at rutrum et.',
          points: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          ],
          links: [
            {
              name: 'Library A',
              url: 'https://www.npmjs.com/package/library-a',
            },
            {
              name: 'Library B',
              url: 'https://www.npmjs.com/package/library-b',
            },
            {
              name: 'Library C',
              url: 'https://www.npmjs.com/package/library-c',
            },
            {
              name: 'Library D',
              url: 'https://www.npmjs.com/package/library-d',
            },
            {
              name: 'Library E',
              url: 'https://www.npmjs.com/package/library-e',
            },
          ],
        },
        {
          name: 'Project C',
          summary:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor ex vitae tortor pulvinar, ac hendrerit metus pellentesque. Vivamus nunc mauris, consequat at rutrum et.',
          points: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          ],
          links: [
            {
              name: 'Library A',
              url: 'https://www.npmjs.com/package/library-a',
            },
            {
              name: 'Library B',
              url: 'https://www.npmjs.com/package/library-b',
            },
            {
              name: 'Library C',
              url: 'https://www.npmjs.com/package/library-c',
            },
            {
              name: 'Library D',
              url: 'https://www.npmjs.com/package/library-d',
            },
            {
              name: 'Library E',
              url: 'https://www.npmjs.com/package/library-e',
            },
          ],
        },
        {
          name: 'Project D',
          summary:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor ex vitae tortor pulvinar, ac hendrerit metus pellentesque. Vivamus nunc mauris, consequat at rutrum et.',
          points: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          ],
          links: [
            {
              name: 'Library A',
              url: 'https://www.npmjs.com/package/library-a',
            },
            {
              name: 'Library B',
              url: 'https://www.npmjs.com/package/library-b',
            },
            {
              name: 'Library C',
              url: 'https://www.npmjs.com/package/library-c',
            },
            {
              name: 'Library D',
              url: 'https://www.npmjs.com/package/library-d',
            },
            {
              name: 'Library E',
              url: 'https://www.npmjs.com/package/library-e',
            },
          ],
        },
        {
          name: 'Project E',
          summary:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor ex vitae tortor pulvinar, ac hendrerit metus pellentesque. Vivamus nunc mauris, consequat at rutrum et.',
          points: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          ],
          links: [
            {
              name: 'Library A',
              url: 'https://www.npmjs.com/package/library-a',
            },
            {
              name: 'Library B',
              url: 'https://www.npmjs.com/package/library-b',
            },
            {
              name: 'Library C',
              url: 'https://www.npmjs.com/package/library-c',
            },
            {
              name: 'Library D',
              url: 'https://www.npmjs.com/package/library-d',
            },
            {
              name: 'Library E',
              url: 'https://www.npmjs.com/package/library-e',
            },
          ],
        },
      ],
    },
    {
      position: 'Position B',
      company: 'Acme Inc.',
      start: DateTime.fromFormat('15.01.20', 'dd.MM.yy'),
      end: DateTime.fromFormat('15.06.20', 'dd.MM.yy'),
      summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at vulputate urna. In faucibus lorem nec elementum sagittis. Nulla facilisi. Mauris congue felis non ante blandit, ut luctus turpis feugiat.',
      projects: [
        {
          name: 'Project A',
          summary:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor ex vitae tortor pulvinar, ac hendrerit metus pellentesque. Vivamus nunc mauris, consequat at rutrum et.',
          points: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          ],
          links: [
            {
              name: 'Library A',
              url: 'https://www.npmjs.com/package/library-a',
            },
            {
              name: 'Library B',
              url: 'https://www.npmjs.com/package/library-b',
            },
            {
              name: 'Library C',
              url: 'https://www.npmjs.com/package/library-c',
            },
            {
              name: 'Library D',
              url: 'https://www.npmjs.com/package/library-d',
            },
            {
              name: 'Library E',
              url: 'https://www.npmjs.com/package/library-e',
            },
          ],
        },
        {
          name: 'Project B',
          summary:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor ex vitae tortor pulvinar, ac hendrerit metus pellentesque. Vivamus nunc mauris, consequat at rutrum et.',
          points: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          ],
          links: [
            {
              name: 'Library A',
              url: 'https://www.npmjs.com/package/library-a',
            },
            {
              name: 'Library B',
              url: 'https://www.npmjs.com/package/library-b',
            },
            {
              name: 'Library C',
              url: 'https://www.npmjs.com/package/library-c',
            },
            {
              name: 'Library D',
              url: 'https://www.npmjs.com/package/library-d',
            },
            {
              name: 'Library E',
              url: 'https://www.npmjs.com/package/library-e',
            },
          ],
        },
        {
          name: 'Project C',
          summary:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor ex vitae tortor pulvinar, ac hendrerit metus pellentesque. Vivamus nunc mauris, consequat at rutrum et.',
          points: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          ],
          links: [
            {
              name: 'Library A',
              url: 'https://www.npmjs.com/package/library-a',
            },
            {
              name: 'Library B',
              url: 'https://www.npmjs.com/package/library-b',
            },
            {
              name: 'Library C',
              url: 'https://www.npmjs.com/package/library-c',
            },
            {
              name: 'Library D',
              url: 'https://www.npmjs.com/package/library-d',
            },
            {
              name: 'Library E',
              url: 'https://www.npmjs.com/package/library-e',
            },
          ],
        },
        {
          name: 'Project D',
          summary:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor ex vitae tortor pulvinar, ac hendrerit metus pellentesque. Vivamus nunc mauris, consequat at rutrum et.',
          points: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          ],
          links: [
            {
              name: 'Library A',
              url: 'https://www.npmjs.com/package/library-a',
            },
            {
              name: 'Library B',
              url: 'https://www.npmjs.com/package/library-b',
            },
            {
              name: 'Library C',
              url: 'https://www.npmjs.com/package/library-c',
            },
            {
              name: 'Library D',
              url: 'https://www.npmjs.com/package/library-d',
            },
            {
              name: 'Library E',
              url: 'https://www.npmjs.com/package/library-e',
            },
          ],
        },
        {
          name: 'Project E',
          summary:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor ex vitae tortor pulvinar, ac hendrerit metus pellentesque. Vivamus nunc mauris, consequat at rutrum et.',
          points: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          ],
          links: [
            {
              name: 'Library A',
              url: 'https://www.npmjs.com/package/library-a',
            },
            {
              name: 'Library B',
              url: 'https://www.npmjs.com/package/library-b',
            },
            {
              name: 'Library C',
              url: 'https://www.npmjs.com/package/library-c',
            },
            {
              name: 'Library D',
              url: 'https://www.npmjs.com/package/library-d',
            },
            {
              name: 'Library E',
              url: 'https://www.npmjs.com/package/library-e',
            },
          ],
        },
      ],
    },
    {
      position: 'Position C',
      company: 'Acme Inc.',
      start: DateTime.fromFormat('15.01.20', 'dd.MM.yy'),
      end: DateTime.fromFormat('15.06.20', 'dd.MM.yy'),
      summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at vulputate urna. In faucibus lorem nec elementum sagittis. Nulla facilisi. Mauris congue felis non ante blandit, ut luctus turpis feugiat.',
      projects: [
        {
          name: 'Project A',
          summary:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor ex vitae tortor pulvinar, ac hendrerit metus pellentesque. Vivamus nunc mauris, consequat at rutrum et.',
          points: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          ],
          links: [
            {
              name: 'Library A',
              url: 'https://www.npmjs.com/package/library-a',
            },
            {
              name: 'Library B',
              url: 'https://www.npmjs.com/package/library-b',
            },
            {
              name: 'Library C',
              url: 'https://www.npmjs.com/package/library-c',
            },
            {
              name: 'Library D',
              url: 'https://www.npmjs.com/package/library-d',
            },
            {
              name: 'Library E',
              url: 'https://www.npmjs.com/package/library-e',
            },
          ],
        },
        {
          name: 'Project B',
          summary:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor ex vitae tortor pulvinar, ac hendrerit metus pellentesque. Vivamus nunc mauris, consequat at rutrum et.',
          points: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          ],
          links: [
            {
              name: 'Library A',
              url: 'https://www.npmjs.com/package/library-a',
            },
            {
              name: 'Library B',
              url: 'https://www.npmjs.com/package/library-b',
            },
            {
              name: 'Library C',
              url: 'https://www.npmjs.com/package/library-c',
            },
            {
              name: 'Library D',
              url: 'https://www.npmjs.com/package/library-d',
            },
            {
              name: 'Library E',
              url: 'https://www.npmjs.com/package/library-e',
            },
          ],
        },
        {
          name: 'Project C',
          summary:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor ex vitae tortor pulvinar, ac hendrerit metus pellentesque. Vivamus nunc mauris, consequat at rutrum et.',
          points: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          ],
          links: [
            {
              name: 'Library A',
              url: 'https://www.npmjs.com/package/library-a',
            },
            {
              name: 'Library B',
              url: 'https://www.npmjs.com/package/library-b',
            },
            {
              name: 'Library C',
              url: 'https://www.npmjs.com/package/library-c',
            },
            {
              name: 'Library D',
              url: 'https://www.npmjs.com/package/library-d',
            },
            {
              name: 'Library E',
              url: 'https://www.npmjs.com/package/library-e',
            },
          ],
        },
        {
          name: 'Project D',
          summary:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor ex vitae tortor pulvinar, ac hendrerit metus pellentesque. Vivamus nunc mauris, consequat at rutrum et.',
          points: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          ],
          links: [
            {
              name: 'Library A',
              url: 'https://www.npmjs.com/package/library-a',
            },
            {
              name: 'Library B',
              url: 'https://www.npmjs.com/package/library-b',
            },
            {
              name: 'Library C',
              url: 'https://www.npmjs.com/package/library-c',
            },
            {
              name: 'Library D',
              url: 'https://www.npmjs.com/package/library-d',
            },
            {
              name: 'Library E',
              url: 'https://www.npmjs.com/package/library-e',
            },
          ],
        },
        {
          name: 'Project E',
          summary:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor ex vitae tortor pulvinar, ac hendrerit metus pellentesque. Vivamus nunc mauris, consequat at rutrum et.',
          points: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          ],
          links: [
            {
              name: 'Library A',
              url: 'https://www.npmjs.com/package/library-a',
            },
            {
              name: 'Library B',
              url: 'https://www.npmjs.com/package/library-b',
            },
            {
              name: 'Library C',
              url: 'https://www.npmjs.com/package/library-c',
            },
            {
              name: 'Library D',
              url: 'https://www.npmjs.com/package/library-d',
            },
            {
              name: 'Library E',
              url: 'https://www.npmjs.com/package/library-e',
            },
          ],
        },
      ],
    },
  ],
  education: [
    {
      institution: 'Name of University',
      qualiftication: 'Name of degree',
      start: DateTime.fromFormat('15.01.20', 'dd.MM.yy'),
      end: DateTime.fromFormat('15.06.20', 'dd.MM.yy'),
    },
  ],
  training: [],
  personal: [],
};

export default data;
