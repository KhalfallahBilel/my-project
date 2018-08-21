import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInfListComponent } from './card-inf-list.component';

describe('CardInfListComponent', () => {
  let component: CardInfListComponent;
  let fixture: ComponentFixture<CardInfListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardInfListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInfListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
