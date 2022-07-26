import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SercurityDepositComponent } from './sercurity-deposit.component';

describe('SercurityDepositComponent', () => {
  let component: SercurityDepositComponent;
  let fixture: ComponentFixture<SercurityDepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SercurityDepositComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SercurityDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
