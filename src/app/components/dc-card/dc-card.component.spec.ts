import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcCardComponent } from './dc-card.component';

describe('DcCardComponent', () => {
  let component: DcCardComponent;
  let fixture: ComponentFixture<DcCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
