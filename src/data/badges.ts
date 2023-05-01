import { Types } from '../components/Schemas';

const make = (name: string): Types['Badge'] => ({
  name,
});

const Badge = {
  make,
};

export { Badge };
