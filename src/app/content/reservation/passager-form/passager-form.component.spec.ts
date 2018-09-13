import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagerFormComponent } from './passager-form.component';

describe('PassagerFormComponent', () => {
  let component: PassagerFormComponent;
  let fixture: ComponentFixture<PassagerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassagerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassagerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
