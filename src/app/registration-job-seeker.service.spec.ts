import { TestBed } from '@angular/core/testing';

import { RegistrationJobSeekerService } from './registration-job-seeker.service';

describe('RegistrationJobSeekerService', () => {
  let service: RegistrationJobSeekerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationJobSeekerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
