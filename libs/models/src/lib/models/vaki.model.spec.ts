// CUSTOM SERVICES
import { VakiModel } from "./vaki.model";

describe('models', () => {
  describe('models', () => {
    describe('VakiModel', () => {
      let vakiModel: VakiModel = new VakiModel();

      it('should create the instance', () =>
        expect(vakiModel).toBeInstanceOf(VakiModel)
      );
    });
  });
});