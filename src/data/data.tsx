import { DateTime } from 'luxon';
import { Types } from '../components/Schemas';
import { Education } from './Education';
import { Projects } from './Projects';
import { Jobs } from './jobs/Jobs';
import { Training } from './training/Training';

// TODO: check links to include all important libraries

const data: Types['Portfolio'] = {
  info: {
    name: 'Alexander Kucheryuk',
    address: 'Edinburgh EH4, Scotland, United Kingdom',
    // https://github.com/colinhacks/zod/issues/2025#issuecomment-1445451748
    intro:
      "I'm a full-stack WordPress developer. Despite the fact that my university degree is in management, technology has always been my passion. That's because I knew I would work in the IT field. My professional journey began as a WordPress developer. I'm capable of doing everything from installing pre-made themes to creating tailor-made solutions. Additionally, I've managed network systems and worked on IT projects. My short-term objective is to become a front-end React developer. I've created a lot of TypeScript-based React widgets over the past two years. My ultimate goal is to hold a top management position, such as CTO.",
    about:
      'As a full-stack WordPress developer with strong project management skills, I am dedicated to delivering high-quality projects that exceed client expectations. With several years of experience in the industry, I have worked with many different companies and have a deep understanding of what it takes to drive success in this field. I am always staying up-to-date with the latest WordPress technologies and am constantly refining my development skills to stay ahead of the curve. Additionally, my project management skills allow me to effectively organize and prioritize tasks, communicate with team members, and ensure successful project completion on time and within budget. With a commitment to excellence and a passion for creating impactful solutions, I am confident that I can make a valuable contribution to any team.',
    skills: [
      'Expertise in WordPress development, including custom theme and plugin development, site customization, and code debugging',
      'Proficiency in frontend development technologies, including React and TypeScript',
      'Proficiency in the backend language PHP, knowledge of popular libraries, and programming patterns',
      'Proficient in project management methodologies, including Agile development, such as Scrum and Kanban',
      'Ability to manage and lead cross-functional development teams, including designers, developers, and quality assurance professionals',
      'Excellent communication skills, with the ability to clearly articulate complex technical concepts to non-technical stakeholders',
      'Strong problem-solving and analytical skills, with a proven track record of delivering high-quality solutions on time and within budget',
      'Demonstrated ability to work collaboratively with internal and external stakeholders, including clients, vendors, and partners',
      'Passionate about staying up-to-date with the latest trends and technologies in the web development industry',
    ],
    linkedin: 'https://linkedin.com/in/alexkuc',
    phone: '+441313990232',
    email: 'alexander.kucheryuk@icloud.com',
    coverLetter: [
      'I am based in Edinburgh and have a 2:1 upper-class degree in Business Science and Human Resources Management from the University of Stirling. I am also legally permitted to work in the UK.',
      "I'm a full-stack WordPress developer. Despite the fact that my university degree is in management, technology has always been my passion. That's because I knew I would work in the IT field. My professional journey began as a WordPress developer. I'm capable of doing everything from installing pre-made themes to creating tailor-made solutions. Additionally, I've managed network systems and worked on IT projects. My short-term objective is to become a front-end React developer. I've created a lot of TypeScript-based React widgets over the past two years. My ultimate goal is to hold a top management position, such as CTO.",
      'Throughout my career, I have worked with various clients and organizations, creating websites and digital solutions that meet their specific needs. I have a keen eye for detail, and I always strive to deliver solutions that exceed expectations. I am dedicated to continuous learning and staying up-to-date with the latest technologies and techniques to provide cutting-edge solutions.',
      'In the long term, my goal is to move into a senior management position, ideally as a CTO or in a similar role. To achieve this, I recognize the importance of gaining experience in both technical and non-technical areas, such as project management, budgeting, and team leadership. I am committed to pursuing additional education and certifications in these areas and to networking with professionals in the IT industry.',
      'I understand that reaching my long-term goal will take time, effort, and dedication. To stay on track, I plan to set smaller, measurable goals along the way to track my progress and feel a sense of accomplishment as I work towards my ultimate objective. Ultimately, my goal is to make a positive impact in the industry, to help drive innovation and growth, and to inspire and mentor the next generation of technology professionals.',
    ],
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
    Projects.PortfolioBuilder,
    Projects.useFilters,
    Projects.MeetingPlanner,
    Projects.ChartJsPlugin,
    Projects.LighthouseTool,
    Projects.Export1Password,
    Projects.SocietyMeetingPlanner,
    Projects.Excel2PO,
    Projects.WordPressComponents,
    Projects.WordPressCI,
    Projects.LastPass,
    Projects.OmniFocusProjects,
    Projects.OmniFocusDeadlines,
    Projects.OmniFocusDefer,
    Projects.RemoteDevServer,
  ],
};

function date(tokens: string): DateTime {
  return DateTime.fromFormat(tokens, 'MM.yy');
}

export { date };

export default data;
