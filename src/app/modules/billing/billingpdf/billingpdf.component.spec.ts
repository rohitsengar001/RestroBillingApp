import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingpdfComponent } from './billingpdf.component';

describe('BillingpdfComponent', () => {
  let component: BillingpdfComponent;
  let fixture: ComponentFixture<BillingpdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingpdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingpdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
