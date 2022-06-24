import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { FaceSnapsModule } from './face-snaps/face-snaps.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    // ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    LandingPageModule,
    AuthModule
  ],
  //Un provider est un objet que l'on déclare à Angular pour qu'il puisse l'injecter à différentes endroits de l'application.
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
