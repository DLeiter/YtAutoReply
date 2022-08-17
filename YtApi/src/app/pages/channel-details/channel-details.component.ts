import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo, YouTubeApiService } from 'src/app/services/youtube-auth.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-channel-details',
  templateUrl: './channel-details.component.html',
  styleUrls: ['./channel-details.component.scss']
})
export class ChannelDetailsComponent implements OnInit {

  private channelUrl = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet&mine=true";

  // private channelDetails:Subject<UserInfo>;
  public youtubeService: YouTubeApiService;

  constructor(private _http: HttpClient, private _youtubeService: YouTubeApiService) { 
    // this.channelDetails = this._youtubeService.userProfileSubject;
    this.youtubeService = this._youtubeService;
  }

  ngOnInit(): void {
    // this.youtubeService = this._youtubeService;
  }

  isLoggedIn(): boolean {
    return this.youtubeService.isLoggedIn();
  }

  logout() {
    this.youtubeService.logout();
  }

  getData(){
    return this._http.get(this.channelUrl);
  }

}
