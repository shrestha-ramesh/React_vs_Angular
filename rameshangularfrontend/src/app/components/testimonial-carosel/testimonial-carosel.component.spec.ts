import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialCaroselComponent } from './testimonial-carosel.component';

describe('TestimonialCaroselComponent', () => {
  let component: TestimonialCaroselComponent;
  let fixture: ComponentFixture<TestimonialCaroselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonialCaroselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialCaroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
