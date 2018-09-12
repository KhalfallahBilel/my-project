import { TestBed, inject } from '@angular/core/testing';

import { SearchVolService } from './search-vol.service';

describe('SearchVolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchVolService]
    });
  });

  it('should be created', inject([SearchVolService], (service: SearchVolService) => {
    expect(service).toBeTruthy();
  }));
});
