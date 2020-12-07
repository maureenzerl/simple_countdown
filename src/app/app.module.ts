import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CountdownModule } from 'ngx-countdown';
import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
