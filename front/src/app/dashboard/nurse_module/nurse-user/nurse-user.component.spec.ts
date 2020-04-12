import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseUserComponent } from './nurse-user.component';

describe('NurseUserComponent', () => {
  let component: NurseUserComponent;
  let fixture: ComponentFixture<NurseUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NurseUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
