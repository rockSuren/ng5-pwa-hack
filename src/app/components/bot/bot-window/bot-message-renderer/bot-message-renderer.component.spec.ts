import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotMessageRendererComponent } from './bot-message-renderer.component';

describe('BotMessageRendererComponent', () => {
  let component: BotMessageRendererComponent;
  let fixture: ComponentFixture<BotMessageRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotMessageRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotMessageRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
