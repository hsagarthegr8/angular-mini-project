import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesJsonComponent } from './courses-json.component';

describe('CoursesJsonComponent', () => {
  let component: CoursesJsonComponent;
  let fixture: ComponentFixture<CoursesJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
