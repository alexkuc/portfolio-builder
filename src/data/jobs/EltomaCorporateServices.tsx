import { Types } from '../../components/Schemas';
import { date } from '../data';

const ITTeamLeader: Types['Job'] = {
  position: 'IT Team Leader',
  company: 'Eltoma Corporate Services',
  summary:
    "As an IT Team Leader, I had 3 employees and 2 contractors reporting to me directly. The employees were responsible for IT support while contractors were working on the company's websites. Aside from my technical obligations, I was also actively invovled with HR roles of the IT department.",
  start: date('01.18'),
  end: date('01.20'),
  projects: [
    {
      name: 'IT Department restructure',
      summary:
        'I have overhauled department by converting it into Kanban-style management where Trello was the primary tool for keeping track of tasks. Additionally, I have introduced code-based budgetting & expenses tracking. This gave transparency into expenses & assets of the department.Finally, I have reduced capital expenditure of the department by switching to OpEx model instead of CapEx.',
    },
    {
      name: 'On-premise servers migration',
      summary:
        'As the company was migrating on-premise servers to MSP, I have assisted with server application migration as I had the necessary domain knowledge on that. This migration was part of CapEx to OpEx migration.',
    },
    {
      name: 'Centralized password management',
      summary:
        'I have migrated the IT department from Keepass to PassWork. Not only it made much easier to share specific passwords with vendors but it also gave transparency via audit logs and revision history.',
    },
    {
      name: 'MODX to WordPress migration',
      summary:
        "I was actively involved with migrating the main company's website from MODX to WordPress. To avoid any SEO-related penalties, I was very careful to preserve existing url structure, tags and related as it is during the migration.",
    },
  ],
};

const JuniorSystemAdministrator: Types['Job'] = {
  position: 'Junior System Administrator',
  company: 'Eltoma Corporate Services',
  summary:
    'This is my very first job in the IT industry. As the title says, I was a junior sysadmin slash tech support. My work ranged from simple client troubleshooting to deploying Cisco ASA VPN between 2 geo-remote sites.',
  start: date('06.11'),
  end: date('12.13'),
  projects: [
    {
      name: 'Cisco ASA VPN',
      summary:
        'I have set up a site-to-site vpn tunnel between two Cisco ASA 5505 where one was located in Cyprus and the other in Singapore.',
    },
    {
      name: 'Windows Active Directory',
      summary:
        'In order to install Sage Practice Solution software, I had to migrate the entire network of about 25 computers from workgroup to Active Directory. It was running Windows Server 2008 at the time.',
    },
    {
      name: 'Server overhaul',
      summary:
        'I have purchased, assembled and configured a tower server that have replaced previously running Linksys NAS. This project goes hand-in-hand with Windows Active Directory project.',
    },
    {
      name: 'Kaspersky Endpoint Security',
      summary:
        'I have purchased, installed and configured Kaspersky Endpoint Security to replace previously running home version of Kaspersky software. Unlike home edition, KES is an enterprise software that allowed central control of policies. For exampke, keeping consistent configuration, vary internet access according to AD OUs and receiving reports of caught malware.',
    },
  ],
};

const EltomaCorporateServices = {
  ITTeamLeader,
  JuniorSystemAdministrator,
};

export { EltomaCorporateServices };
