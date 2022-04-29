import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamllFooterComponent } from './samll-footer.component';

describe('SamllFooterComponent', () => {
  let component: SamllFooterComponent;
  let fixture: ComponentFixture<SamllFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamllFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamllFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
