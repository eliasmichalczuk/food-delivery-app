import { Meal } from './meal.interface';
export interface Group {
  id: number;
  name: string;
  meals: Array<Meal>;
}
