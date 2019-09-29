import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripModePage } from './trip-mode.page';

describe('TripModePage', () => {
  let component: TripModePage;
  let fixture: ComponentFixture<TripModePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripModePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripModePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
