import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { DiscoverComponent } from './discover/discover.component';
import { DragDropTestComponent } from './drag-drop-test/drag-drop-test.component';
import { DraggableModule } from './drag-drop-test/draggable/draggable.module';
import { CardComponent } from './search/grid/card/card.component';
import { GridComponent } from './search/grid/grid.component';
import { SearchComponent } from './search/search.component';
import { TimelineRoutingModule } from './timeline-routing.module';
import { TimelineComponent } from './timeline/timeline.component';
import { WhatToFollowComponent } from './what-to-follow/what-to-follow.component';
import { MiddleClickDirective } from '../shared/directives/middle-click.directive';

@NgModule({
  declarations: [
    TimelineComponent,
    SearchComponent,
    GridComponent,
    CardComponent,
    DragDropTestComponent,
    DiscoverComponent,
    WhatToFollowComponent,
    MiddleClickDirective
  ],
  imports: [
    CommonModule,
    TimelineRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatGridListModule,
    DraggableModule,
    MatMenuModule,
    MatToolbarModule,
    FlexLayoutModule,
    DragDropModule,
    MatProgressBarModule,
    HttpClientModule,
    RouterModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [WhatToFollowComponent],
  providers: [HttpClientModule]
})
export class TimelineModule {}
