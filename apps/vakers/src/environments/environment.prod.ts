// CUSTOM LIBRARIES
import { CONFIG, ConfigurationInterface, GOOGLE } from '@vaki-challenge/configuration';

let config: ConfigurationInterface = Object.assign({}, CONFIG);
config.production = true;
config.google = GOOGLE;

export const environment: any = config;