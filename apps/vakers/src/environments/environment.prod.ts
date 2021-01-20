// CUSTOM LIBRARIES
import { CONFIG, ConfigurationInterface, FIREBASE_GOOGLE } from '@vaki-challenge/configurations';

let config: ConfigurationInterface = Object.assign({}, CONFIG);
config.production = true;
config.google = {
    firebase: FIREBASE_GOOGLE
};

export const environment: any = config;