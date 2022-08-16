import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { YouTubeApiService } from 'src/app/services/youtube-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public youtubeService: YouTubeApiService;
  public http: HttpClient;

  hostname = 'https://youtube.googleapis.com';
  path = '/youtube/v3/channels?part=snippet&mine=true';

  optionsEx = {
    'method': 'GET',
    'hostname': 'youtube.googleapis.com',
    'path': '/youtube/v3/channels?part=snippet&mine=true',
    'headers': {
      'Authorization': 'Bearer ya29.A0AVA9y1to6cqfkADioxNhX9nLr_Nf_kzt4dMF710BrW_rgeGKcWldD-pfCcgP_Vn3mfzWsaJu48BAIjsCQJNhTWThpXQcOoo4sG3Qs-fcXecNTlWoIGhp4XXjPuw7YS3nL8bBz4GJ3u85PrGrCBAbc5yAk5zpYwaCgYKATASATASFQE65dr8Mdgz0Lp00wxtJOx_An8hPA0165'
    },
    'maxRedirects': 20
  };
  
  httpOptions = {
    headers: new HttpHeaders({
     'Content-Type': 'application/json',
     'Access-Control-Allow-Origin': window.location.origin,
     'Authorization': 'Bearer ya29.A0AVA9y1to6cqfkADioxNhX9nLr_Nf_kzt4dMF710BrW_rgeGKcWldD-pfCcgP_Vn3mfzWsaJu48BAIjsCQJNhTWThpXQcOoo4sG3Qs-fcXecNTlWoIGhp4XXjPuw7YS3nL8bBz4GJ3u85PrGrCBAbc5yAk5zpYwaCgYKATASATASFQE65dr8Mdgz0Lp00wxtJOx_An8hPA0165'
    }),
   withCredentials: true
  };

  // options: {
  //   headers: HttpHeaders | {[]}
  // };

  constructor(private _youtubeService: YouTubeApiService,
    private _http: HttpClient) { 
    // this.channelDetails = this._youtubeService.userProfileSubject;
    this.youtubeService = this._youtubeService;
    this.http = this._http;
  }

  ngOnInit(): void {
  }

  getChannelDetails(){
    this.http.get<any>(this.hostname + this.path, this.httpOptions).subscribe(data => {
      console.log("TEST");
    })
  }

  isLoggedIn(): boolean {
    return this.youtubeService.isLoggedIn();
  }

  logout() {
    console.log("LOG OUT");
    this.youtubeService.logOut();
  }

}
