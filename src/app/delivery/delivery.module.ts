import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryComponent } from './delivery.component';
import { TimelineComponent } from '../timeline/timeline/timeline.component';
import { TimelineRoutingModule } from '../timeline/timeline-routing.module';

@NgModule({
  declarations: [DeliveryComponent],
  imports: [CommonModule, TimelineRoutingModule]
})
export class DeliveryModule {}
