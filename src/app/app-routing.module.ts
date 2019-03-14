import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragDropTestComponent } from './timeline/drag-drop-test/drag-drop-test.component';

const routes: Routes = [
  {
    path: 'timeline',
    loadChildren: './timeline/timeline.module#TimelineModule'
  },
  {
    path: '',
    redirectTo: 'timeline',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
