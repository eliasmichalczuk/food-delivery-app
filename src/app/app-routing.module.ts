import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelineComponent } from './timeline/timeline/timeline.component';
import { TimelineModule } from './timeline/timeline.module';
import { TimelineRoutingModule } from './timeline/timeline-routing.module';
import { DragDropTestComponent } from './timeline/drag-drop-test/drag-drop-test.component';

const routes: Routes = [
  {
    path: 'timeline', component: TimelineComponent
  },
  {
    path: '', component: DragDropTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
