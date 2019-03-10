import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineRoutingModule } from './timeline-routing.module';
import { TimelineComponent } from './timeline/timeline.component';
import { SearchComponent } from './search/search.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { GridComponent } from './search/grid/grid.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { CardComponent } from './search/grid/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { DragDropTestComponent } from './drag-drop-test/drag-drop-test.component';
import { DraggableModule } from './drag-drop-test/draggable/draggable.module';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [TimelineComponent, SearchComponent, GridComponent, CardComponent, DragDropTestComponent],
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
    HttpClientModule,
    DraggableModule,
    MatMenuModule,
    MatToolbarModule,
    FlexLayoutModule,
    DragDropModule,
    MatProgressBarModule
  ]
})
export class TimelineModule { }
