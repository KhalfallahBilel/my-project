import { TestBed, inject } from '@angular/core/testing';

import { CardInfListService } from './card-inf-list.service';

describe('CardInfListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardInfListService]
    });
  });

  it('should be created', inject([CardInfListService], (service: CardInfListService) => {
    expect(service).toBeTruthy();
  }));
});
