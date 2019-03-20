import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryComponent } from './delivery.component';
import { SharedModule } from '../shared/shared.module';
import { DeliveryRoutingModule } from './delivery-routing.module';
import { MealsComponent } from './meals/meals.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [DeliveryComponent, MealsComponent],
  imports: [
    CommonModule,
    DeliveryRoutingModule,
    SharedModule,
    FlexLayoutModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule
  ]
})
export class DeliveryModule {}
