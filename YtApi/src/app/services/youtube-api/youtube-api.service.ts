import { OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnChanges } from '@angular/core';
import { ChannelDetailsModel } from '../../models/channel-details';
import { YouTubeAuthService } from '../youtube-auth/youtube-auth.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {
  
    httpOptions = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization': 'Bearer ' + this._youtubeAuthService.getAuthToken()
      }),
        withCredentials: false
      };

  hostname = 'https://youtube.googleapis.com';
  channelPath = '/youtube/v3/channels?part=snippet&mine=true';

  constructor(private _youtubeAuthService: YouTubeAuthService,
     private http: HttpClient) {
  }

  test(){
    console.log("TEST");
  }

  getChannelDetails(): Observable<ChannelDetailsModel>{
    return this.http.get<ChannelDetailsModel>(this.hostname + this.channelPath, this.httpOptions)
  };
}
