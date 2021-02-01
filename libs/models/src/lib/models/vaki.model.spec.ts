// CUSTOM MODELS
import { VakiModel } from "./vaki.model";

describe('models', () => {
  describe('models', () => {
    describe('VakiModel', () => {
      let vakiModel: VakiModel = new VakiModel();

      it(`should create the instance and extending 'ModelAbstract'`, () =>
        expect(vakiModel).toBeInstanceOf(VakiModel)
      );
    });
  });
});