import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaletComponent } from './walet.component';

describe('WaletComponent', () => {
  let component: WaletComponent;
  let fixture: ComponentFixture<WaletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
