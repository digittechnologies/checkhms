import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WardUserComponent } from './ward-user.component';

describe('WardUserComponent', () => {
  let component: WardUserComponent;
  let fixture: ComponentFixture<WardUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WardUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WardUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
