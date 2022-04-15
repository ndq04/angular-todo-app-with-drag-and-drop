import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicDragAndDropComponent } from './components/basic-drag-and-drop/basic-drag-and-drop.component';
import { DragAndDropConnectedSortingComponent } from './components/drag-and-drop-connected-sorting/drag-and-drop-connected-sorting.component';
import { DragAndDropSortingComponent } from './components/drag-and-drop-sorting/drag-and-drop-sorting.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicDragAndDropComponent,
    DragAndDropSortingComponent,
    DragAndDropConnectedSortingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatNativeDateModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
