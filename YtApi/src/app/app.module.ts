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

import { YouTubeApiService, UserInfo } from './services/youtube-auth.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
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

  providers: [YouTubeApiService],
  
  bootstrap: [AppComponent]
})
export class AppModule {
  
  // userInfo?: UserInfo;

  // constructor(private readonly youtubeApi: YouTubeApiService,
  //   private readonly httpClient: HttpClientModule){
  //     youtubeApi.userProfileSubject.subscribe(info => {
  //       this.userInfo = info;
  //     })
  // }

  // isLoggedIn(): boolean {
  //   return this.youtubeApi.isLoggedIn();
  // }

  // logout() {
  //   this.youtubeApi.logOut();
  // }

 }
