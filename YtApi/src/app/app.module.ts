import { AppRoutingModule, routingComponents } from './app-routing.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCommonModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';

import { YouTubeAuthService, UserInfo } from './services/youtube-auth.service';

import { AppComponent } from './app.component';
import { YoutubeApiService } from './services/youtube-api.service';
import { ThumbnailCardComponent } from './components/thumbnail-card/thumbnail-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ThumbnailCardComponent,
    routingComponents,
  ],

  imports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSliderModule,
    MatButtonModule,
    MatMenuModule,
    MatCommonModule,
    MatGridListModule,
    HttpClientModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    OAuthModule.forRoot(),
  ],

  providers: [YouTubeAuthService,
    YoutubeApiService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule {

 }
