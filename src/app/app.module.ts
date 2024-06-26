import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FairDashboard } from './shared/component/fairdashboard/fairsdash.component';
import { FairCards } from './shared/component/faircards/faircard.component';
import { FairDetails } from './shared/component/fairdetails/fairdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    FairDashboard,
    FairCards,
    FairDetails
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
