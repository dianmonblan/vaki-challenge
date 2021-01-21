import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule, FirebaseOptions } from '@angular/fire';
import { environment } from '../environments/environment';

// CUSTOM COMPONENTS
import { AppComponent } from './app.component';

// CUSTOM LIBRARIES
import { VakiService } from '@vaki-challenge/services';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AngularFireModule.initializeApp(<FirebaseOptions>environment.google['firebase'])
  ],
  providers: [
    VakiService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }