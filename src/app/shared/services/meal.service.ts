import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  constructor(private http: HttpClient) {}

  getGroupMeal(restaurantId: number) {
    return this.http.get(
      environment.connection + `/group/${restaurantId}?_embed=meal`
    );
  }

  getOption(mealId: number) {
    return this.http.get(environment.connection + `/option?mealId=${mealId}`);
  }
}
