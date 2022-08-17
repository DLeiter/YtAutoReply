import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  httpOptions = {};

  constructor(private _youtubeService: YouTubeApiService,
    private _http: HttpClient) { 
    this.youtubeService = this._youtubeService;
    this.http = this._http;
  }

  ngOnInit(): void {
    this.httpOptions = {
    headers: new HttpHeaders({
     'Content-Type': 'application/json',
     'Authorization': 'Bearer ' + this.youtubeService.getAuthToken()
    }),
      withCredentials: false
    }
  }

  getChannelDetails(){
    this.http.get<any>(this.hostname + this.path, this.httpOptions).subscribe(data => {
      console.log(data);
    })
  }

}
