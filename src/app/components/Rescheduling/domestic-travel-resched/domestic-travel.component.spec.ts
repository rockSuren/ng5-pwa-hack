import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticTravelReComponent } from './domestic-travel.component';

describe('DomesticTravelComponent', () => {
  let component: DomesticTravelReComponent;
  let fixture: ComponentFixture<DomesticTravelReComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomesticTravelReComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticTravelReComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
