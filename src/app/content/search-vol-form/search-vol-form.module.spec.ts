import { SearchVolFormModule } from './search-vol-form.module';

describe('SearchVolFormModule', () => {
  let searchVolFormModule: SearchVolFormModule;

  beforeEach(() => {
    searchVolFormModule = new SearchVolFormModule();
  });

  it('should create an instance', () => {
    expect(searchVolFormModule).toBeTruthy();
  });
});
