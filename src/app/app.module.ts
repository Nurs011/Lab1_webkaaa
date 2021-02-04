import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddRecordComponent } from './add-record/add-record.component';
import { MyResultsComponent } from './my-results/my-results.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRecordComponent,
    MyResultsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
