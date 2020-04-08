import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueUserComponent } from './revenue-user.component';

describe('RevenueUserComponent', () => {
  let component: RevenueUserComponent;
  let fixture: ComponentFixture<RevenueUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
