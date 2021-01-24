// CUSTOM SERVICES
import { VakiRewardModel } from "./vaki-reward.model";

describe('models', () => {
  describe('VakiRewardModel', () => {
    let vakiRewardModel: VakiRewardModel = new VakiRewardModel();

    it('should create the instance', () =>
      expect(vakiRewardModel).toBeInstanceOf(VakiRewardModel)
    );
  });
});
