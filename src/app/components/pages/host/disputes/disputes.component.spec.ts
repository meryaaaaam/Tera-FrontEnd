import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputesComponent } from './disputes.component';

describe('DisputesComponent', () => {
  let component: DisputesComponent;
  let fixture: ComponentFixture<DisputesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
