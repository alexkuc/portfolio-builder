import { DateTime } from 'luxon';
import { Types } from '../components/Schemas';
import { Education } from './Education';
import { Projects } from './Projects';
import { Jobs } from './jobs/Jobs';
import { Training } from './training/Training';

// LATER: check links to include all important libraries

const data: Types['Portfolio'] = {
  info: {
    name: 'Alexander Kucheryuk',
    address: 'Edinburgh, Scotland, United Kingdom, EH4',
    // https://github.com/colinhacks/zod/issues/2025#issuecomment-1445451748
    intro:
      "I'm a full-stack WordPress developer. Despite the fact that my university degree is in management, technology has always been my passion. That's because I knew I would work in the IT field. My professional journey began as a WordPress developer. I'm capable of doing everything from installing pre-made themes to creating tailor-made solutions. Additionally, I've managed network systems and worked on IT projects. My short-term objective is to become a front-end React developer. I've created a lot of TypeScript-based React widgets over the past two years. My ultimate goal is to hold a top management position, such as CTO.",
    about: {
      'Personal Profile':
        "I'm a full-stack WordPress developer. Despite the fact that my university degree is in management, technology has always been my passion. That's because I knew I would work in the IT field. My professional journey began as a WordPress developer. I'm capable of doing everything from installing pre-made themes to creating tailor-made solutions. Additionally, I've managed network systems and worked on IT projects. My short-term objective is to become a front-end React developer. I've created a lot of TypeScript-based React widgets over the past two years. My ultimate goal is to hold a top management position, such as CTO.",
      'Skills and Core Competence':
        "As a full-stack WordPress developer, I have a lot of experience and am well-versed in a variety of technological fields, including front-end and back-end web development. I've worked on a variety of projects, ranging from simple jQuery scripts to wholly unique React and TypeScript solutions. I have expertise with LEMP and Active Directory infrastructures in addition to web development, so I can handle network and server-related difficulties.",
    },
    linkedin: 'https://linkedin.com/in/alexkuc',
    phone: '+441313990232',
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
