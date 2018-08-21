import { CardInfModule } from './card-inf.module';

describe('CardInfModule', () => {
  let cardInfModule: CardInfModule;

  beforeEach(() => {
    cardInfModule = new CardInfModule();
  });

  it('should create an instance', () => {
    expect(cardInfModule).toBeTruthy();
  });
});
