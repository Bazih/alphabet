import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { ChallengeComponent } from './components/challenge/challenge.component';
import { RootComponent } from './components/root/root.component';

@NgModule({
  declarations: [
    AppComponent,
    ChallengeComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
