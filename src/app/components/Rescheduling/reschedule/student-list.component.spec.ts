/**
 * Created By : Inf-Wm Account
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RescheduleComponent } from './student-list.component';

describe('RescheduleComponent', () => {
  let component: RescheduleComponent;
  let fixture: ComponentFixture<RescheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RescheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RescheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
/**
 * Created By : Inf-Wm Account
 */
