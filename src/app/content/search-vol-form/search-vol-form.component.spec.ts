import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVolFormComponent } from './search-vol-form.component';

describe('SearchVolFormComponent', () => {
  let component: SearchVolFormComponent;
  let fixture: ComponentFixture<SearchVolFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchVolFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchVolFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
