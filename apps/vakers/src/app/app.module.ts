import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule, FirebaseOptions } from '@angular/fire';
import { environment } from '../environments/environment';

// CUSTOM COMPONENTS
import { AppComponent } from './app.component';

// CUSTOM LIBRARIES
import { AngularUniversalPlatformService, VakiFirestoreService } from '@vaki-challenge/services';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AngularFireModule.initializeApp(<FirebaseOptions>environment.google['firebase']),
    BrowserTransferStateModule
  ],
  providers: [
    AngularUniversalPlatformService,
    VakiFirestoreService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }