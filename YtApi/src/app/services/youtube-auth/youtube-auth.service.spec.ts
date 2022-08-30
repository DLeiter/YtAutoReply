import { TestBed } from '@angular/core/testing';

import { YouTubeAuthService } from './youtube-auth.service';

describe('GoogleApiService', () => {
  let service: YouTubeAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YouTubeAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
