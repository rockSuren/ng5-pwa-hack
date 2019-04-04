import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestIternaryComponent } from './request-iternary.component';

describe('RequestIternaryComponent', () => {
  let component: RequestIternaryComponent;
  let fixture: ComponentFixture<RequestIternaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestIternaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestIternaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
