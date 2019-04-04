import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxiReComponent } from './taxi.component';

describe('TaxiComponent', () => {
  let component: TaxiReComponent;
  let fixture: ComponentFixture<TaxiReComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxiReComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxiReComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
