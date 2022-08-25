import { Component, OnInit } from '@angular/core';
import { ChannelDetailsModel } from 'src/app/models/channel-details';
import { YoutubeApiService } from 'src/app/services/youtube-api.service';
import { ChannelDetailsComponent } from '../channel-details/channel-details.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  // public youtubeService: YouTubeAuthService;
  // public http: HttpClient;

  public channelDetails = <ChannelDetailsModel>{};

  youtubeService: YoutubeApiService;

  constructor(private _youtubeService: YoutubeApiService) { 
    this.youtubeService = this._youtubeService;
  }

  ngOnInit(): void {
    // this.youtubeService.test();
    this.youtubeService.setChannelDetails();
  }

  // setChannelDetails(){
  //   this.http.get<ChannelDetailsModel>(this.hostname + this.path, this.httpOptions).subscribe(data => {
  //     console.log(data);
  //     this.channelDetails = data;
  //   })
  // }

}
