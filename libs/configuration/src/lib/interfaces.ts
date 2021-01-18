import { FirebaseOptions } from '@angular/fire';

export interface ConfigurationInterface {
    [property: string]: string | number | boolean | ConfigurationInterface | FirebaseOptions
}