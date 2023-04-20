import { DateTime } from 'luxon';
import { Types } from '../../components/Schemas';
import phpunit from './laracasts-phpunit.pdf';
import symfony4level1 from './laracasts-symfony4-level1.pdf';

const Symfony4Level1: Types['Course'] = {
  name: 'Symfony 4 Level 1',
  completion: date('09.02.20'),
  links: [
    {
      name: 'PDF',
      href: url(symfony4level1),
    },
  ],
};

const PHPUnit: Types['Course'] = {
  name: 'PHPUnit: Testing with a Bite',
  completion: date('02.01.21'),
  links: [
    {
      name: 'PDF',
      href: url(phpunit),
    },
  ],
};

const SymfonyCasts = {
  Symfony4Level1,
  PHPUnit,
};

function date(tokens: string): DateTime {
  return DateTime.fromFormat(tokens, 'dd.MM.yy');
}

function url(file: string): string {
  return new URL(file, window.location.href).href;
}

export { SymfonyCasts };
