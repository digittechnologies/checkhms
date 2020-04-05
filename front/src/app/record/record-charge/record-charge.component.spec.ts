import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordChargeComponent } from './record-charge.component';

describe('RecordChargeComponent', () => {
  let component: RecordChargeComponent;
  let fixture: ComponentFixture<RecordChargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordChargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
