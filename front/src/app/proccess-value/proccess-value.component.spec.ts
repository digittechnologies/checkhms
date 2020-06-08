import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProccessValueComponent } from './proccess-value.component';

describe('ProccessValueComponent', () => {
  let component: ProccessValueComponent;
  let fixture: ComponentFixture<ProccessValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProccessValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProccessValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
