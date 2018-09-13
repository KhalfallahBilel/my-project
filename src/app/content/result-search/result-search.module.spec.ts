import { ResultSearchModule } from './result-search.module';

describe('ResultSearchModule', () => {
  let resultSearchModule: ResultSearchModule;

  beforeEach(() => {
    resultSearchModule = new ResultSearchModule();
  });

  it('should create an instance', () => {
    expect(resultSearchModule).toBeTruthy();
  });
});
