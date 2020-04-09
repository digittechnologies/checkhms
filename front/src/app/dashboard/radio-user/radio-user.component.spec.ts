import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioUserComponent } from './radio-user.component';

describe('RadioUserComponent', () => {
  let component: RadioUserComponent;
  let fixture: ComponentFixture<RadioUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
