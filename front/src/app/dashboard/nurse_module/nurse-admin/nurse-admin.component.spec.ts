import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseAdminComponent } from './nurse-admin.component';

describe('NurseAdminComponent', () => {
  let component: NurseAdminComponent;
  let fixture: ComponentFixture<NurseAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NurseAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
