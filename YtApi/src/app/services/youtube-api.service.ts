import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {

  private _url: string = "";

  constructor(private http: HttpClient) {
    
  }

  getChannelDetails(){
    return this.http.get(this._url)
  }
}
