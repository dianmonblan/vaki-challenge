// CUSTOM MODELS
import { ModelAbstract } from "./model-abstract.model";

// CUSTOM INTERFACES
import { VakiRewardInterface } from '../interfaces/vaki-reward.interface';

export class VakiRewardModel extends ModelAbstract implements VakiRewardInterface {
  title: string;
  description: string;
  visible: boolean;
  img: string;
  key: string;
  value: string;
  delivery_date: number;
  claimed: number;
  quantityAvailable: number;
}