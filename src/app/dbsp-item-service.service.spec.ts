/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DbspItemServiceService } from './dbsp-item-service.service';

describe('Service: DbspItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DbspItemServiceService]
    });
  });

  it('should ...', inject([DbspItemServiceService], (service: DbspItemServiceService) => {
    expect(service).toBeTruthy();
  }));
});
