import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyVisionCardComponent } from './company-vision-card.component';

describe('CompanyVisionCardComponent', () => {
  let component: CompanyVisionCardComponent;
  let fixture: ComponentFixture<CompanyVisionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyVisionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyVisionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
