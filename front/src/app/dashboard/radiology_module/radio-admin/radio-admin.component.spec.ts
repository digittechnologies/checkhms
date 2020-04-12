import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioAdminComponent } from './radio-admin.component';

describe('RadioAdminComponent', () => {
  let component: RadioAdminComponent;
  let fixture: ComponentFixture<RadioAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
