import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemeHmoComponent } from './scheme-hmo.component';

describe('SchemeHmoComponent', () => {
  let component: SchemeHmoComponent;
  let fixture: ComponentFixture<SchemeHmoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemeHmoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemeHmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
