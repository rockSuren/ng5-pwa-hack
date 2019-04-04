import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticTravelComponent } from './domestic-travel.component';

describe('DomesticTravelComponent', () => {
  let component: DomesticTravelComponent;
  let fixture: ComponentFixture<DomesticTravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomesticTravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
