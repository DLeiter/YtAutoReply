import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ChannelDetailsComponent } from './pages/channel-details/channel-details.component';
import { GoogleApiService } from './services/google-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'YtApi';
  constructor(private readonly google: GoogleApiService,
    private readonly http:HttpClient){}
}
