import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';

// CUSTOM SERVICES
import { AngularUniversalPlatformService } from './angular-universal-platform.service';

describe('services', () => {
  describe('helpers', () => {
    describe('AngularUniversalPlatformService', () => {
      let angularUniversalPlatformService: AngularUniversalPlatformService;

      beforeEach(() => {
        TestBed.configureTestingModule({
          providers: [
            {
              provide: PLATFORM_ID,
              useValue: 'browser'
            },
            AngularUniversalPlatformService
          ]
        });

        angularUniversalPlatformService = TestBed.inject(AngularUniversalPlatformService);
      });

      it('should create the instance', () => {
        expect(angularUniversalPlatformService).toBeInstanceOf(AngularUniversalPlatformService)
      });

      it(`should have a method 'isBrowser' that verify the execution of the platform on the web browser`, () =>
        expect(angularUniversalPlatformService.isBrowser()).toBeTruthy()
      );

      it(`should have a method 'isServer' that verify the execution of the platform on the server`, () =>
        expect(angularUniversalPlatformService.isServer()).toBeFalsy()
      );
    });
  });
});