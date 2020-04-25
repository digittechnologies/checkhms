import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueLogComponent } from './revenue-log.component';

describe('RevenueLogComponent', () => {
  let component: RevenueLogComponent;
  let fixture: ComponentFixture<RevenueLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
