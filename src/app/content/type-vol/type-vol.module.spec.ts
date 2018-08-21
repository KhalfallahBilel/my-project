import { TypeVolModule } from './type-vol.module';

describe('TypeVolModule', () => {
  let typeVolModule: TypeVolModule;

  beforeEach(() => {
    typeVolModule = new TypeVolModule();
  });

  it('should create an instance', () => {
    expect(typeVolModule).toBeTruthy();
  });
});
