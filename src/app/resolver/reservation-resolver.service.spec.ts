import { TestBed, inject } from '@angular/core/testing';

import { ReservationResolverService } from './reservation-resolver.service';

describe('ReservationResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReservationResolverService]
    });
  });

  it('should be created', inject([ReservationResolverService], (service: ReservationResolverService) => {
    expect(service).toBeTruthy();
  }));
});
