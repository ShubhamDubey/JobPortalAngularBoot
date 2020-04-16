import { TestBed } from '@angular/core/testing';

import { RegistrationRecuiterService } from './registration-recuiter.service';

describe('RegistrationRecuiterService', () => {
  let service: RegistrationRecuiterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationRecuiterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
