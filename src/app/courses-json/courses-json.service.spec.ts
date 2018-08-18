import { TestBed, inject } from '@angular/core/testing';

import { CoursesJsonService } from './courses-json.service';

describe('CoursesJsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesJsonService]
    });
  });

  it('should be created', inject([CoursesJsonService], (service: CoursesJsonService) => {
    expect(service).toBeTruthy();
  }));
});
