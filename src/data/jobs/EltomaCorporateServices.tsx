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
        'I have overhauled department by converting it into Kanban-style management where Trello was the primary tool for keeping track of tasks. Additionally, I have introduced code-based budgetting & expenses tracking. This gave transparency into expenses & assets of the department.Finally, I have reduced capital expenditure of the department by switching to OpEx model instead of CapEx. Operations-wise, I have introduced checklists and procedures by means of Trello templates for routine tasks such as onboarding a new employee or provisioning a new hardware for them. This ensured consistent and high quality of work avoid "Oops, I forgot..." moments from the IT department.',
    },
    {
      name: 'Documentation and internal audit',
      summary:
        "I have performed an internal audit and have created a comprehensive internal documentation of the IT systems. As the company was spread between 6 geo-remote offices in Russia, Ukraine, Singapore, and UK, having an up-to-date documentation was paramount. The documentation consisted of network map, purchased licenses and inventory. The network map was created in LucidChart and provided both, a top level topology overview as well as fine details like port numbers. Information on purchases licenses scattered all over the places so I have diligently assembled everything and stored it in Confluence. The information included invoices, license numbers, activation limit and the machine where it was activated as well as vendor's contact information. Invetory included information about on-premise servers, office laptops and desktops. Information included network MACs, serial numbers, and related.",
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
    {
      name: 'Domain tracking and dnmin',
      summary:
        'As a part of business operations, each client required a simple website that was hosted on their on domain. Given that there were dozens of domains that had different expiry dates as well as renewal procedures, a centralized system for keeping track of them was necessary. I have consolidated and centralized this process using FOSS or Free Open Source Software called dnmin.',
    },
    {
      name: 'Sage 50c Accounts and SPS training',
      summary:
        "For its operations, the company was using Sage 50c Accounts for book keeping and Sage Practice Solutions for overall management of work. This in turned required me to become a domain expert on these 2 pieces of software in order to provide daily Q&A as well as clear communicate with the vendor's support line. Of course, it has helped that I do have a basic knowledge of debit and credit accounting model.",
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
