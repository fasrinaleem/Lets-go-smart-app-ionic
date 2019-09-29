import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentWebPage } from './payment-web.page';

describe('PaymentWebPage', () => {
  let component: PaymentWebPage;
  let fixture: ComponentFixture<PaymentWebPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentWebPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentWebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
