import { TestBed } from '@angular/core/testing';
import { AngularFireModule, FirebaseOptions } from '@angular/fire';
import { environment } from '@vaki-challenge/apps/vakers/src/environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { PLATFORM_ID } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';

// CUSTOM SERVICES
import { VakiFirestoreService } from "./vaki-firestore.service";
import { FirestoreService } from './firestore.service';
import { AngularUniversalPlatformService } from "../general";

// MOCK DATABASE CLOUD FIRESTORE VAKI CHALLENGE APPLICATION
import { AngularFirestoreMock } from "@vaki-challenge/configurations/test";

describe('services', () => {
  describe('firestores', () => {
    describe('FirestoreService', () => {
      let firestoreService: FirestoreService<any>;

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
            FirestoreService,
            VakiFirestoreService,
            {
              provide: PLATFORM_ID,
              useValue: 'browser'
            },
            AngularUniversalPlatformService
          ]
        });

        firestoreService = TestBed.inject(FirestoreService);
      });

      it('should create the instance', () =>
        expect(firestoreService).toBeInstanceOf(FirestoreService)
      );
    });
  });
});