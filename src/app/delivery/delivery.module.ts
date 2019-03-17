import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryComponent } from './delivery.component';
import { SharedModule } from '../shared/shared.module';
import { DeliveryRoutingModule } from './delivery-routing.module';
import { MealsComponent } from './meals/meals.component';

@NgModule({
  declarations: [DeliveryComponent, MealsComponent],
  imports: [CommonModule, DeliveryRoutingModule, SharedModule]
})
export class DeliveryModule {}
