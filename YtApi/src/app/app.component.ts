import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // constructor(private readonly googleApi: GoogleApiService,
  //   private readonly http:HttpClient){
  //     googleApi.userProfileSubject.subscribe(info => {
  //       this.userInfo = info;
  //     })
  //   }
  constructor(){}

    // isLoggedIn(): boolean {
    //   return this.googleApi.isLoggedIn();
    // }

    // logout() {
    //   this.googleApi.signOut();
    // }
}
