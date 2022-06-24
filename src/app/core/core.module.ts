import { LOCALE_ID,NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { httpInterceptorProvider } from './interceptors';
import * as fr from '@angular/common/locales/fr';
import { HeaderComponent } from './components/header/header.component';
import { RouterLink, RouterModule } from '@angular/router';

//core modules : ce type de module contient tout ce que l'on importe une seule fois
// ng g m core

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,//CommonModule met à disposition toutes les fonctionnalités Angular de base :  *ngIf  ,  *ngFor  , les événements spécifiques Angular, etc
    RouterModule
  ],
  exports:[
    HeaderComponent
  ],
  providers:[
    {provide: LOCALE_ID,useValue:'fr-FR'},
    httpInterceptorProvider//provider pour les intercep[tors]
  ]
})
export class CoreModule {
  constructor(){
    registerLocaleData(fr.default);
  }
 }
