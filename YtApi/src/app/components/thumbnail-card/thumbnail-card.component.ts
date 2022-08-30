import { Component, Input, OnInit } from '@angular/core';
import { Snippet } from 'src/app/models/channel-details';
import { YoutubeApiService } from 'src/app/services/youtube-api/youtube-api.service';

@Component({
  selector: 'app-thumbnail-card',
  templateUrl: './thumbnail-card.component.html',
  styleUrls: ['./thumbnail-card.component.scss']
})
export class ThumbnailCardComponent implements OnInit {
  
  @Input() contentType:string = "";

  public youtubeService: YoutubeApiService;
  public snippet: Snippet|null = null;

  constructor(private _youtubeService: YoutubeApiService) { 
    this.youtubeService = this._youtubeService;
  }

  ngOnInit(): void {
    this.contentType = this.contentType.toUpperCase();
    if(this.contentType == "CHANNEL"){
      this.youtubeService.getChannelDetails().subscribe(data => {
        if(data.items) this.snippet = data.items[0].snippet
      });
    }
    else if(this.contentType == "VIDEO"){
      // this.cardContent = "VIDEO DESCRIPTION";
    }
  }

}
