import { TestBed } from '@angular/core/testing';

import { CreatBillGuard } from './creat-bill.guard';

describe('CreatBillGuard', () => {
  let guard: CreatBillGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CreatBillGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
