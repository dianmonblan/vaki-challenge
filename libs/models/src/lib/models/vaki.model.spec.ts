// CUSTOM SERVICES
import { VakiModel } from "./vaki.model";

describe('VakiModel', () => {
  let vakiModel: VakiModel = new VakiModel();

  it('created instance', () => {
    expect(vakiModel).toBeInstanceOf(VakiModel);
  });
});
