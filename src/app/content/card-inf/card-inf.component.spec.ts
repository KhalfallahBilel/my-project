import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInfComponent } from './card-inf.component';

describe('CardInfComponent', () => {
  let component: CardInfComponent;
  let fixture: ComponentFixture<CardInfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardInfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
