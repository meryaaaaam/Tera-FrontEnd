import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBookingsListComponent } from './dashboard-bookings-list.component';

describe('DashboardBookingsListComponent', () => {
  let component: DashboardBookingsListComponent;
  let fixture: ComponentFixture<DashboardBookingsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardBookingsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBookingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
