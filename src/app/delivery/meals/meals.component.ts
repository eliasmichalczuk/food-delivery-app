import { Meal } from './../../dto/meal.interface';
import { Group } from './../../dto/group.interface';
import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/shared/services/card.service';
import { ActivatedRoute } from '@angular/router';
import { MealService } from 'src/app/shared/services/meal.service';
import { map, take, switchMap } from 'rxjs/operators';
import { Card } from 'src/app/dto/card.interface';
import { Option } from 'src/app/dto/option.interface';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.sass']
})
export class MealsComponent implements OnInit {
  card: Card;
  restaurantId: number;
  group: Array<Group>;

  constructor(
    private cardService: CardService,
    private activated: ActivatedRoute,
    private mealService: MealService
  ) {}

  ngOnInit() {
    this.activated.paramMap
      .pipe(take(1))
      .pipe(
        switchMap(res => {
          const cardId = +res.get('id');
          return this.cardService.getCard(cardId);
        })
      )
      .pipe(
        switchMap(res => {
          this.card = <Card>res;
          return this.mealService.getGroupMeal(this.card.restaurantId);
        })
      )
      .subscribe((res: Array<Group>) => {
        this.group = res;
        console.log('froup', res);
        // console.log('id', res[0].meals[0].id);
        // return this.mealService.getOption(this.group[0].meals[0].id);
        this.getOptions();
      });
  }

  getOptions() {
    console.log('ww', this.group);
    // this.group.forEach(group => {
    //   group.meal.forEach(meal => {
    //     console.log('ddw', meal.id);
    //     this.mealService.getOption(meal.id).subscribe((res: Array<Option>) => {
    //       meal.option = res;
    //       console.log('options', res);
    //     });
    //   });
    // });
    this.mealService.getOption(1).subscribe((res: Array<Option>) => {
      this.group[0].meal[0].option = res;
      console.log('options', res);
    });
  }
}
