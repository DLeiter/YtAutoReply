import { TestBed } from '@angular/core/testing';

import { YouTubeApiService } from './youtube-auth.service';

describe('GoogleApiService', () => {
  let service: YouTubeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YouTubeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
