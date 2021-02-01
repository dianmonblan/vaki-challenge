// CUSTOM MODELS
import { VakiRewardModel } from "./vaki-reward.model";

describe('models', () => {
  describe('models', () => {
    describe('VakiRewardModel', () => {
      let vakiRewardModel: VakiRewardModel = new VakiRewardModel();

      it(`should create the instance and extending 'ModelAbstract'`, () =>
        expect(vakiRewardModel).toBeInstanceOf(VakiRewardModel)
      );
    });
  });
});