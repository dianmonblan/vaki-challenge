import { TestBed } from '@angular/core/testing';
import { AngularFireModule, FirebaseOptions } from '@angular/fire';
import { environment } from '@vaki-challenge/apps/vakers/src/environments/environment';
import { mockFirebase } from 'ts-mock-firebase';
import { QuerySnapshot } from '@firebase/firestore-types';
import { AngularFirestore } from '@angular/fire/firestore';

// CUSTOM SERVICES
import { VakiFirestoreService } from "./vaki-firestore.service";

// CUSTOM LIBRARIES
import { FIREBASE_GOOGLE } from "@vaki-challenge/configurations";
import { VakiModel } from "@vaki-challenge/models";

const mockFirebaseNamespace = mockFirebase();
const mockFirebaseApp = mockFirebaseNamespace.initializeApp(FIREBASE_GOOGLE);
const firestore = mockFirebaseApp.firestore();

firestore.mocker.loadCollection('vakers', {
  vakiOne: {
    name: "Vaki name"
  }
});

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

  it('created instance', () => {
    expect(vakiFirestoreService).toBeInstanceOf(VakiFirestoreService);
  });

  it('declared collection name', async () => {
    expect(vakiFirestoreService.collectionName).not.toBeNull();
  });

  describe('list', () => {
    it('size', (done: Function) => {
      vakiFirestoreService.list()
        .subscribe((vakers: QuerySnapshot<VakiModel>) => {
          expect(vakers.size).toEqual(1);
          done();
        });
    });

    it('declared document name', (done: Function) => {
      vakiFirestoreService.list()
        .subscribe((vakers: QuerySnapshot<VakiModel>) => {
          expect(vakers.docs[0].data().name).toEqual("Vaki name");
          done();
        });
    });
  });
});