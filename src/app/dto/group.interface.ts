import { Meal } from './meal.interface';
export interface Group {
  id: number;
  name: string;
  meal: Array<Meal>;
}
