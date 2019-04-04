import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotWindowComponent } from './bot-window.component';

describe('BotWindowComponent', () => {
  let component: BotWindowComponent;
  let fixture: ComponentFixture<BotWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
