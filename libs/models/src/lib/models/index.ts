import { VakiRewardModel } from "./vaki-reward.model";
import { VakiModel } from "./vaki.model";

export * from "./model-abstract.model";
export * from "./vaki.model";
export * from "./vaki-reward.model";
export type CreateModelIntance<M> = new () => M;
export type Model = VakiModel | VakiRewardModel;