import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WardAdminComponent } from './ward-admin.component';

describe('WardAdminComponent', () => {
  let component: WardAdminComponent;
  let fixture: ComponentFixture<WardAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WardAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WardAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
