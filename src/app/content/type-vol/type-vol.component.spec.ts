import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeVolComponent } from './type-vol.component';

describe('TypeVolComponent', () => {
  let component: TypeVolComponent;
  let fixture: ComponentFixture<TypeVolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeVolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeVolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
