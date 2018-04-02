import { TestBed, inject } from '@angular/core/testing';

import { ConsomeMoodleService } from './consome-moodle.service';

describe('ConsomeMoodleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsomeMoodleService]
    });
  });

  it('should be created', inject([ConsomeMoodleService], (service: ConsomeMoodleService) => {
    expect(service).toBeTruthy();
  }));
});
