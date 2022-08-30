import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { MaterialModule } from './material.module';


import { YouTubeAuthService } from './services/youtube-auth/youtube-auth.service';
import { YoutubeApiService } from './services/youtube-api/youtube-api.service';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ThumbnailCardComponent } from './components/thumbnail-card/thumbnail-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ThumbnailCardComponent,
    routingComponents,
  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    MaterialModule,
    OAuthModule.forRoot(),
  ],

  providers: [YouTubeAuthService,
    YoutubeApiService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule {

 }
