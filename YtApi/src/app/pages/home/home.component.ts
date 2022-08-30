import { Component, OnInit } from '@angular/core';
import { ChannelDetailsModel } from 'src/app/models/channel-details';
import { YoutubeApiService } from 'src/app/services/youtube-api/youtube-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public channelDetails = <ChannelDetailsModel>{};

  youtubeService: YoutubeApiService;

  constructor(private _youtubeService: YoutubeApiService) { 
    this.youtubeService = this._youtubeService;
  }

  ngOnInit(): void {
  }

}
