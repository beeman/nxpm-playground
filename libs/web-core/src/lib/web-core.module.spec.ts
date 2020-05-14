import { async, TestBed } from '@angular/core/testing';
import { WebCoreModule } from './web-core.module';

describe('WebCoreModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebCoreModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WebCoreModule).toBeDefined();
  });
});
