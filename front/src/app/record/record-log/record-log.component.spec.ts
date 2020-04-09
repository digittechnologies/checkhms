import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordLogComponent } from './record-log.component';

describe('RecordLogComponent', () => {
  let component: RecordLogComponent;
  let fixture: ComponentFixture<RecordLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
