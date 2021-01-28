import { TestBed } from '@angular/core/testing';
import { AngularFireModule, FirebaseOptions } from '@angular/fire';
import { environment } from '@vaki-challenge/apps/vakers/src/environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { PLATFORM_ID } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';

// CUSTOM SERVICES
import { VakiFirestoreService } from "./vaki-firestore.service";
import { AngularUniversalPlatformService } from "../general";

// CUSTOM LIBRARIES;
import { VakiModel } from "@vaki-challenge/models";

// MOCK DATABASE CLOUD FIRESTORE VAKI CHALLENGE APPLICATION
import { AngularFirestoreMock } from "@vaki-challenge/configurations/test";

describe('services', () => {
  describe('firestores', () => {
    describe('VakiFirestoreService', () => {
      let vakiFirestoreService: VakiFirestoreService;

      beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [
            AngularFireModule.initializeApp(<FirebaseOptions>environment.google['firebase']),
            BrowserTransferStateModule
          ],
          providers: [
            {
              provide: AngularFirestore,
              useValue: new AngularFirestoreMock()
            },
            VakiFirestoreService,
            {
              provide: PLATFORM_ID,
              useValue: 'browser'
            },
            AngularUniversalPlatformService
          ]
        });

        vakiFirestoreService = TestBed.inject(VakiFirestoreService);
      });

      it('should create the instance', () =>
        expect(vakiFirestoreService).toBeInstanceOf(VakiFirestoreService)
      );

      it('should have a collection name', () =>
        expect(vakiFirestoreService.collectionName).not.toBeNull()
      );

      it(`should have a method 'list' with the name 'Vaki name' on first document`, (done: Function) =>
        vakiFirestoreService.list()
          .subscribe((vakers: VakiModel[]) => {
            expect(vakers[0].name).toEqual("Vaki name");
            done();
          })
      );
    });
  });
});