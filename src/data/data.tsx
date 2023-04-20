import { DateTime } from 'luxon';
import { Types } from '../components/Schemas';
import { Education } from './Education';
import { Projects } from './Projects';
import { Jobs } from './jobs/Jobs';
import photo from './photo.jpg';
import { Training } from './training/Training';

const data: Types['Portfolio'] = {
  info: {
    name: 'Alexander Kucheryuk',
    // https://github.com/colinhacks/zod/issues/2025#issuecomment-1445451748
    photo: new URL(photo, window.location.href).href,
    intro:
      'My name is Alexander and I am a full-stack WordPress developer. Technology have always been my passion even though my higher education degree is closer related to management. In my mind, I always knew I would end up working in IT industry. My career path has started as a WordPress developer. My capabilities range from setting up a pre-made theme to writing a fully custom solution. My short term goal is to become a frontend developer with a primary specialty in React. In the last two years, I have written plenty of TypeScript-based React widgets. My long term goal is to become a CTO or hold a similar senior management position.',
    linkedin: 'https://linkedin.com/in/alexkuc',
    // phone: '', // TODO:
    email: 'alexander.kucheryuk@icloud.com',
  },
  jobs: [
    Jobs.IronFX.WebTechLead,
    Jobs.IronFX.Developer,
    Jobs.Upwork,
    Jobs.EltomaCorporateServices.ITTeamLeader,
    Jobs.FeedSyndicate,
    Jobs.EltomaCorporateServices.JuniorSystemAdministrator,
  ],
  education: [Education.UniversityOfStirling],
  training: [
    Training.SymfonyCasts.Symfony4Level1,
    Training.SymfonyCasts.PHPUnit,
    Training.CBTNuggets.IPv4Subnetting,
    Training.CBTNuggets.PowerShell4,
    Training.CBTNuggets.MCSA70742,
    Training.CBTNuggets.MCSA70740,
    Training.CBTNuggets.ITILFoundationV3,
  ],
  personal: [
    Projects.portfolioBuilder,
    Projects.useFilters,
    Projects.meetingPlanner,
    Projects.chartJsPlugin,
  ],
};

function date(tokens: string): DateTime {
  return DateTime.fromFormat(tokens, 'MM.yy');
}

export { date };

export default data;
