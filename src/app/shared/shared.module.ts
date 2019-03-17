import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './components/timeline/timeline.component';
import { WhatToFollowComponent } from './components/what-to-follow/what-to-follow.component';
import {
  MatButtonModule,
  MatCardModule,
  MatTabsModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatGridListModule,
  MatMenuModule,
  MatToolbarModule,
  MatProgressBarModule,
  MatSelectModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DraggableModule } from '../timeline/drag-drop-test/draggable/draggable.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TimelineComponent, WhatToFollowComponent],
  imports: [
    CommonModule,
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
    MatProgressBarModule,
    HttpClientModule,
    RouterModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [TimelineComponent, WhatToFollowComponent]
})
export class SharedModule {}
