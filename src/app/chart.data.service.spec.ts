import { TestBed } from '@angular/core/testing';

import { Chart.DataService } from './chart.data.service';

describe('Chart.DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Chart.DataService = TestBed.get(Chart.DataService);
    expect(service).toBeTruthy();
  });
});
