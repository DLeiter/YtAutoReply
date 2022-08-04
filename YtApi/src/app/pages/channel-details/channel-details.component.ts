import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-channel-details',
  templateUrl: './channel-details.component.html',
  styleUrls: ['./channel-details.component.scss']
})
export class ChannelDetailsComponent implements OnInit {

  private channelUrl = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet&mine=true";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getData(){
    return this.http.get(this.channelUrl);
  }

}
