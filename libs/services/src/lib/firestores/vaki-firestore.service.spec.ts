import { TestBed } from '@angular/core/testing';
import { AngularFireModule, FirebaseOptions } from '@angular/fire';
import { environment } from '@vaki-challenge/apps/vakers/src/environments/environment';
import { QuerySnapshot } from '@firebase/firestore-types';
import { AngularFirestore } from '@angular/fire/firestore';

// CUSTOM SERVICES
import { VakiFirestoreService } from "./vaki-firestore.service";

// CUSTOM LIBRARIES;
import { VakiModel } from "@vaki-challenge/models";

// MOCK DATA BASE CLOUD FIRESTORE VAKI CHALLENGE APPLICATION
import { firestore } from "@vaki-challenge/configurations/test";

describe('services', () => {
  describe('firestores', () => {
    describe('VakiFirestoreService', () => {
      let vakiFirestoreService: VakiFirestoreService;

      beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [
            AngularFireModule.initializeApp(<FirebaseOptions>environment.google['firebase'])
          ],
          providers: [
            {
              provide: AngularFirestore,
              useValue: firestore.mocker
            },
            VakiFirestoreService
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
          .subscribe((vakers: QuerySnapshot<VakiModel>) => {
            expect(vakers.docs[0].data().name).toEqual("Vaki name");
            done();
          })
      );
    });
  });
});