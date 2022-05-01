import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormsComponent } from './search-forms.component';

describe('SearchFormsComponent', () => {
  let component: SearchFormsComponent;
  let fixture: ComponentFixture<SearchFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
