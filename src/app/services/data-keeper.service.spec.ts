import { TestBed } from '@angular/core/testing';

import { DataKeeperService } from './data-keeper.service';

describe('DataKeeperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataKeeperService = TestBed.get(DataKeeperService);
    expect(service).toBeTruthy();
  });
});
