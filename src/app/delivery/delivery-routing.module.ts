import { DeliveryComponent } from './delivery.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MealsComponent } from './meals/meals.component';

const routes: Routes = [
  {
    path: '',
    component: DeliveryComponent,
    children: [
      {
        path: 'meals',
        component: MealsComponent
      },
      {
        path: '',
        redirectTo: 'meals',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryRoutingModule {}
