import { VolsModule } from './vols.module';

describe('VolsModule', () => {
  let volsModule: VolsModule;

  beforeEach(() => {
    volsModule = new VolsModule();
  });

  it('should create an instance', () => {
    expect(volsModule).toBeTruthy();
  });
});
