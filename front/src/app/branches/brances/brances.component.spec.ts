import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrancesComponent } from './brances.component';

describe('BrancesComponent', () => {
  let component: BrancesComponent;
  let fixture: ComponentFixture<BrancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
