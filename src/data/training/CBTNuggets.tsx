import { DateTime } from 'luxon';
import { Types } from '../../components/Schemas';
import ipv4subnetting from './cbt-nuggets-ipv4-subnetting.pdf';
import itilfoundationv3 from './cbt-nuggets-itil-foundation-v3.pdf';
import mcsa70740 from './cbt-nuggets-mcsa-70-740.pdf';
import mcsa70742 from './cbt-nuggets-mcsa-70-742.pdf';
import powershell4 from './cbt-nuggets-powershell4.pdf';

const IPv4Subnetting: Types['Course'] = {
  name: 'IPv4 Subnetting',
  completion: date('05.01.19'),
  links: [pdf(ipv4subnetting)],
};

const PowerShell4: Types['Course'] = {
  name: 'Microsoft PowerShell 4 Foundations',
  completion: date('02.12.18'),
  links: [pdf(powershell4)],
};

const ITILFoundationV3: Types['Course'] = {
  name: 'ITIL® v3 Foundation',
  completion: date('24.04.18'),
  links: [pdf(itilfoundationv3)],
};

const MCSA70740: Types['Course'] = {
  name: 'Microsoft Windows Server 2016: Installation, Storage, and Compute (70-740)',
  completion: date('04.07.18'),
  links: [pdf(mcsa70740)],
};

const MCSA70742: Types['Course'] = {
  name: 'Microsoft Windows Server 2016: Identity (70-742)',
  completion: date('07.07.18'),
  links: [pdf(mcsa70742)],
};

const CBTNuggets = {
  IPv4Subnetting,
  PowerShell4,
  ITILFoundationV3,
  MCSA70740,
  MCSA70742,
};

function date(tokens: string): DateTime {
  return DateTime.fromFormat(tokens, 'dd.MM.yy');
}

function pdf(file: string): Types['Link'] {
  return {
    name: 'PDF',
    href: new URL(file, window.location.href).href,
  };
}

export { CBTNuggets };
