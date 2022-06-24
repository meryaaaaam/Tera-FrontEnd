import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Steps1Component } from './steps1.component';

describe('Steps1Component', () => {
  let component: Steps1Component;
  let fixture: ComponentFixture<Steps1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Steps1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Steps1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
