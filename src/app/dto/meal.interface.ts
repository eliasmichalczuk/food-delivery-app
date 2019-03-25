import { Option } from './option.interface';

export interface Meal {
  id: number;
  groupId: number;
  name: string;
  price: number;
  option: Array<Option>;
}
