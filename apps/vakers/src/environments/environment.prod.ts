import { CONFIG } from '@vaki-challenge/configuration';

export const environment = {
  ...CONFIG,
  ...{ production: true }
};
