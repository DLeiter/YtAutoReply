import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

const oAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId: '14340184878-vovsuqln2lt4mp7gfrbi8cu8nk4fmatf.apps.googleusercontent.com',
  scope: 'https://www.googleapis.com/auth/youtube.force-ssl'
}

export interface Info {
  iss: string;
  azp: string;
  aud: string;
  sub: string;
  at_hash: string;
  nonce: string;
  iat: number;
  exp: number;
  jti: string;
  picture: string;
}

export interface UserInfo {
  info: Info;
}

@Injectable({
  providedIn: 'root'
})

export class YouTubeApiService {

  youtube = '';
  public userProfileSubject = new Subject<UserInfo>();

  constructor(private readonly oAuthService: OAuthService) {
    oAuthService.configure(oAuthConfig);
    oAuthService.logoutUrl = 'https://www.google.com/accounts/Logout';
    oAuthService.loadDiscoveryDocument().then(() => {
      oAuthService.tryLoginImplicitFlow().then(() => {
        if(!oAuthService.hasValidAccessToken()){
          oAuthService.initLoginFlow();
        } else {
          oAuthService.loadUserProfile().then((userProfile) => {
            this.userProfileSubject.next(userProfile as UserInfo);
            // console.log(JSON.stringify(userProfile));
          })
        }
      })
    });
  }

  isLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  logOut() {
    this.oAuthService.logOut()
  }
}
