import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChallengeComponent } from './components/challenge/challenge.component';
import { RootComponent } from './components/root/root.component';

const routes: Routes = [
  {path: '', component: RootComponent},
  {path: 'challenge', component: ChallengeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
