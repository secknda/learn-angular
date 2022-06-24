import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snaps/components/face-snap-list/face-snap-list.component';
import { NewFaceSnapComponent } from './face-snaps/components/new-face-snap/new-face-snap.component';
import { SingleFaceSnapComponent } from './face-snaps/components/single-face-snap/single-face-snap.component';
import { LandingPageComponent } from './landing-page/components/landing-page/landing-page.component';

const routes: Routes = [
  //Il faut dire à AppRoutingModule de déléguer les routes 
  // facesnaps/  à FaceSnapsModule. Vous allez utiliser une syntaxe spécifique qui permet à Angular 
  //de mettre en place le lazy loading
  { path: 'facesnaps', loadChildren:() => import('./face-snaps/face-snaps.module').then(m=>
    m.FaceSnapsModule)},
  {path:'',component:LandingPageComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
