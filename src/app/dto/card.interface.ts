export interface Card {
  id: number;
  restaurantId: number;
  name: string;
  foodType: string;
  description: string;
  deliveryCharge: number;
  amount: string;
  rating: number;
  distance: number;
  time: Array<number>;
}
