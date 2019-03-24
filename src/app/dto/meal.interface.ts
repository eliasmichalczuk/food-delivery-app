import { Option } from './option.interface';

export interface Meal {
  id: number;
  groupId: number;
  name: string;
  price: number;
  options: Array<Option>;
}
