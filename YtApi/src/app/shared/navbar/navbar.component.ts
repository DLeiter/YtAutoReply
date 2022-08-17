import { Component, OnInit } from '@angular/core';
import { YouTubeApiService } from 'src/app/services/youtube-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  youtubeService;

  constructor(private _youtubeService: YouTubeApiService) { 
    this.youtubeService = _youtubeService;
  }

  ngOnInit(): void {
  }

}
