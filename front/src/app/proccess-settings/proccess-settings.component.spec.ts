import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProccessSettingsComponent } from './proccess-settings.component';

describe('ProccessSettingsComponent', () => {
  let component: ProccessSettingsComponent;
  let fixture: ComponentFixture<ProccessSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProccessSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProccessSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
