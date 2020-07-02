import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLazyLoadComponent } from './nav-lazy-load.component';

describe('NavLazyLoadComponent', () => {
  let component: NavLazyLoadComponent;
  let fixture: ComponentFixture<NavLazyLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavLazyLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLazyLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
