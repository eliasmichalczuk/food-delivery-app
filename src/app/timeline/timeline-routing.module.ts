import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { DragDropTestComponent } from './drag-drop-test/drag-drop-test.component';
import { DiscoverComponent } from './discover/discover.component';
import { TimelineComponent } from '../shared/components/timeline/timeline.component';

const routes: Routes = [
  {
    path: '',
    component: TimelineComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'search'
      },
      {
        path: 'search',
        component: SearchComponent,
        data: { animation: 'isLeft' }
      },
      {
        path: 'discover',
        component: DiscoverComponent,
        data: { animation: 'isLeft' }
      }
    ]
  },
  {
    path: 'dragdrop',
    component: DragDropTestComponent
  },
  {
    path: '',
    redirectTo: '/search',
    pathMatch: ''
  },
  {
    path: '**',
    redirectTo: '/search'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimelineRoutingModule {}
