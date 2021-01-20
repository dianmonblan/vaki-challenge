// CUSTOM MODELS
import { ModelAbstract } from './model-abstract.model';

// CUSTOM INTERFACES
import { VakiInterface } from '../interfaces/vaki.interface';

export class VakiModel extends ModelAbstract implements VakiInterface {
  description: string;
  start_date: number;
  close_date: number;
  name: string;
  summary: string;
  url: string;
  photo?: string;
  video?: string;
  country: any;
}