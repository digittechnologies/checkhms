import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicServiceComponent } from './clinic-service.component';

describe('ClinicServiceComponent', () => {
  let component: ClinicServiceComponent;
  let fixture: ComponentFixture<ClinicServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
