import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { ChallengeComponent } from './components/challenge/challenge.component';
import { RootComponent } from './components/root/root.component';
import { TestWordComponent } from './components/challenge/test-word/test-word.component';

@NgModule({
  declarations: [
    AppComponent,
    ChallengeComponent,
    RootComponent,
    TestWordComponent
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
