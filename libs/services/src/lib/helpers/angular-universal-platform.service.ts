import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Injectable()
export class AngularUniversalPlatformService {
  constructor(
    @Inject(PLATFORM_ID) private _platformId: Object
  ) { }

  isBrowser(): boolean {
    return isPlatformBrowser(this._platformId);
  }

  isServer(): boolean {
    return isPlatformServer(this._platformId);
  }
}
