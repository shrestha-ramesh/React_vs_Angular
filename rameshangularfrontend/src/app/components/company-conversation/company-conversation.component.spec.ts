import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyConversationComponent } from './company-conversation.component';

describe('CompanyConversationComponent', () => {
  let component: CompanyConversationComponent;
  let fixture: ComponentFixture<CompanyConversationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyConversationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
