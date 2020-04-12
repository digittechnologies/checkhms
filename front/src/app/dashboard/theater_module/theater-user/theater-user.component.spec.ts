import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheaterUserComponent } from './theater-user.component';

describe('TheaterUserComponent', () => {
  let component: TheaterUserComponent;
  let fixture: ComponentFixture<TheaterUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheaterUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheaterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
