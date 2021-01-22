// CUSTOM SERVICES
import { VakiRewardModel } from "./vaki-reward.model";

describe('VakiRewardModel', () => {
  let vakiRewardModel: VakiRewardModel = new VakiRewardModel();

  it('created instance', () => {
    expect(vakiRewardModel).toBeInstanceOf(VakiRewardModel);
  });
});
