import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelineComponent } from './timeline/timeline.component';
import { SearchComponent } from './search/search.component';
import { DragDropTestComponent } from './drag-drop-test/drag-drop-test.component';
import { DiscoverComponent } from './discover/discover.component';

const routes: Routes = [
  {
    path: '', component: TimelineComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'search'
      },
      {
        path: 'search', component: SearchComponent,
        data: { animation: 'isLeft'}
      },
      {
        path: 'discover', component: DiscoverComponent,
        data: { animation: 'isLeft'}
      },
    ]
  },
  {
    path: 'dragdrop', component: DragDropTestComponent
  },
  {
    path: 'timeline',
    redirectTo: '/search',
    pathMatch: ''
  },
  {
    path: '**',
    redirectTo: '/search',
    pathMatch: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimelineRoutingModule { }
