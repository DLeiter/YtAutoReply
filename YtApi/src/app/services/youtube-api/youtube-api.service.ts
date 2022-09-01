import { OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnChanges } from '@angular/core';
import { ChannelDetailsModel } from '../../models/channel-details';
import { YouTubeAuthService } from '../youtube-auth/youtube-auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VideoDetailsModel } from 'src/app/models/video-details';

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
  channelID: string | null = null;

  hostname = 'https://youtube.googleapis.com/youtube/v3';
  channelPath = '/channels?part=snippet&mine=true';
  videoPath = `/search?part=snippet&channelId=${this.getChannelID()}&order=date&maxResults=50`;

  constructor(private _youtubeAuthService: YouTubeAuthService,
    private http: HttpClient) {
    // this.getChannelDetails()
    // .subscribe(data => {
    //   this.channelId = data.items[0].id;
    //   console.log(this.channelId);
    // });
  }

  getChannelDetails(): Observable<ChannelDetailsModel> {
    return this.http.get<ChannelDetailsModel>(this.hostname + this.channelPath, this.httpOptions);
  }

  getChannelID(): string | null {
    if (!this.channelID)
      this.http.get<ChannelDetailsModel>(this.hostname + this.channelPath, this.httpOptions)
        .pipe(
          map((res) => {
            if (res.items)
              this.channelID = res.items[0].id;
          }
          )
        );
    return this.channelID;
  }

  getVideoDetails(): VideoDetailsModel {
    return this.http.get<VideoDetailsModel>(this.hostname + this.videoPath, this.httpOptions)
    .pipe(
      map((res: VideoDetailsModel) => {
        res
      })
    );
    // .subscribe(data => {
    //   this.channelId = data.items[0].id;
    //   return this.http.get<VideoDetailsModel>(this.hostname + this.videoPath)
    // });
  }
}
