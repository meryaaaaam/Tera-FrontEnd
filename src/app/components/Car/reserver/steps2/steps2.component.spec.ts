import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Steps2Component } from './steps2.component';

describe('Steps2Component', () => {
  let component: Steps2Component;
  let fixture: ComponentFixture<Steps2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Steps2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Steps2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
