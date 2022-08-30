import { Component, OnInit } from '@angular/core';
import { YouTubeAuthService } from 'src/app/services/youtube-auth/youtube-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  youtubeService;

  constructor(private _youtubeService: YouTubeAuthService) { 
    this.youtubeService = _youtubeService;
  }

  ngOnInit(): void {
  }

}
