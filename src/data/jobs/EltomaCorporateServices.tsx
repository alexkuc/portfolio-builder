import { Types } from '../../components/Schemas';
import { date } from '../data';

const ITTeamLeader: Types['Job'] = {
  position: 'IT Team Leader',
  company: 'Eltoma Corporate Services',
  // summary: 'TODO:',
  start: date('01.18'),
  end: date('01.20'),
  projects: [
    // TODO:
  ],
};

const JuniorSystemAdministrator: Types['Job'] = {
  position: 'Junior System Administrator',
  company: 'Eltoma Corporate Services',
  // summary: 'TODO:',
  start: date('06.11'),
  end: date('12.13'),
  projects: [
    // TODO:
  ],
};

const EltomaCorporateServices = {
  ITTeamLeader,
  JuniorSystemAdministrator,
};

export { EltomaCorporateServices };
