import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Steps3Component } from './steps3.component';

describe('Steps3Component', () => {
  let component: Steps3Component;
  let fixture: ComponentFixture<Steps3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Steps3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Steps3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
