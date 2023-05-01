import { Types } from '../components/Schemas';
import { date } from './data';

const UniversityOfStirling: Types['Study'] = {
  start: date('09.15'),
  end: date('06.19'),
  institution: 'University of Stirling',
  qualiftication:
    'Bachelor of Arts with Honors Business Studies and Human Resource Management (2:1 class)',
};

const Education = {
  UniversityOfStirling,
};

export { Education };
