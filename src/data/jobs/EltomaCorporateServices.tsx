import { Types } from '../../components/Schemas';
import { date } from '../data';

const ITTeamLeader: Types['Job'] = {
  position: 'IT Team Leader',
  company: 'Eltoma Corporate Services',
  summary:
    "I was the IT Team Leader, and I was directly responsible for 3 employees and 2 contractors. The company's websites were being developed by contractors, and the staff was in charge of providing IT assistance. Along with my technical responsibilities, I was actively involved in the IT department's HR duties.",
  start: date('01.18'),
  end: date('01.20'),
  projects: [
    {
      name: 'IT Department restructure',
      summary:
        "By switching the department over to Kanban-style management, where Trello served as the main task management tool, I completely redesigned the division. Aside from that, I have added code-based budgeting and expense tracking. This made the department's costs and assets transparent. Finally, by using the OpEx model rather than the CapEx model, I have decreased the department's capital expenditure. For operational tasks like onboarding a new employee or provisioning new equipment for them, I have implemented checklists and procedures using Trello templates. This prevented the IT staff from having any 'Oops, I forgot...' moments and assured consistency and excellent quality of work.",
    },
    {
      name: 'Documentation and internal audit',
      summary:
        'I created significant internal documentation of the IT systems while conducting an internal audit. The company was spread out among six geo-remote offices in Russia, Ukraine, Singapore, and the UK, so having up-to-date documentation was essential. The documentation included an inventory, a network map, and software licenses that had been purchased. The network map included both a high-level topology overview and specific information like port numbers. Since information on purchased licenses was scattered all over the place, I painstakingly put everything together. The data included contact details for the vendor, invoices, license numbers, the computer where it was activated, and the activation limit. Information on office desktops, laptops, and on-premise servers was included in the inventory.',
    },
    {
      name: 'On-premise servers migration',
      summary:
        'I helped with the server application migration as the business migrated its on-premise servers to a Managed Services Provider (MSP), as I had the requisite domain expertise in that area. The CapEx to OpEx conversion was the primary driver behind this move.',
    },
    {
      name: 'Centralized password management',
      summary:
        'I switched the IT division over to PassWork from Keepass. Sharing specific passwords with vendors became a lot simpler thanks to this, and it also provided transparency thanks to audit logs and revision history.',
    },
    {
      name: 'MODX to WordPress migration',
      summary:
        'I played a significant role in the conversion of the main business website from MODX to WordPress. I took great care to keep the current URL structure, tags, and related information the same throughout the migration in order to prevent any SEO-related issues.',
    },
    {
      name: 'Domain tracking and dnmin',
      summary:
        'To incorporate their firm, each client required a simple website that was hosted on their own domain. Because there were numerous domains with various expiration dates and renewal procedures, a unified method for managing domains was necessary. I have employed dnmin, a free open source program, to centralize and streamline this procedure.',
    },
    {
      name: 'Sage 50c Accounts and SPS training',
      summary:
        "The business used Sage Practice Solutions for general work management and Sage 50c Accounts for bookkeeping in its operations. As a result, I had to become an expert on these two pieces of software in order to answer daily questions and have clear conversations with the vendor's support team. Of course, the fact that I am familiar with the debit and credit accounting concepts has been helpful.",
    },
  ],
};

const JuniorSystemAdministrator: Types['Job'] = {
  position: 'Junior System Administrator',
  company: 'Eltoma Corporate Services',
  summary:
    'My first position in the IT sector is this one. I was a junior system administrator and tech support specialist, as the title indicates. My tasks varied from straightforward client troubleshooting to setting up a Cisco ASA VPN between two geographically distant sites.',
  start: date('06.11'),
  end: date('12.13'),
  projects: [
    {
      name: 'Cisco ASA VPN',
      summary:
        'A site-to-site VPN tunnel was established between two Cisco ASA 5505s, one of which was situated in Singapore and the other in Cyprus.',
    },
    {
      name: 'Windows Active Directory',
      summary:
        'I had to switch the complete network of roughly 25 PCs from workgroup to Active Directory in order to install Sage Practice Solution software. At the time, Windows Server 2008 was being used.',
    },
    {
      name: 'Server overhaul',
      summary:
        'I purchased, assembled, and installed a tower server to swap out the previously functional Linksys NAS. This is closely related to the Windows Active Directory project.',
    },
    {
      name: 'Kaspersky Endpoint Security',
      summary:
        'To replace the earlier, home edition version, I have now bought, installed, and configured KES, or Kaspersky Endpoint Security. KES was an enterprise program that allowed for centralized policy control. For instance, maintaining consistent settings, adjusting internet access in accordance with AD OUs, and receiving reports of malware that has been discovered',
    },
  ],
};

const EltomaCorporateServices = {
  ITTeamLeader,
  JuniorSystemAdministrator,
};

export { EltomaCorporateServices };
