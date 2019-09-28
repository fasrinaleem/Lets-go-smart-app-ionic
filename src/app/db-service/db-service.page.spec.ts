import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbServicePage } from './db-service.page';

describe('DbServicePage', () => {
  let component: DbServicePage;
  let fixture: ComponentFixture<DbServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbServicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
