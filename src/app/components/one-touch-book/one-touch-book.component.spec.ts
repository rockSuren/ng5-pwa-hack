import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneTouchBookComponent } from './one-touch-book.component';

describe('OneTouchBookComponent', () => {
  let component: OneTouchBookComponent;
  let fixture: ComponentFixture<OneTouchBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneTouchBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneTouchBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
