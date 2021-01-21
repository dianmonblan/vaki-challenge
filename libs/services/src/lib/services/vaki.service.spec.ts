import { inject, TestBed } from '@angular/core/testing';
import { AngularFireModule, FirebaseOptions } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '@vaki-challenge/apps/vakers/src/environments/environment';

// CUSTOM SERVICES
import { VakiService } from "./vaki.service";

describe('VakiService', () => {
  let vakiService: VakiService, angularFirestoreService: AngularFirestore;

  beforeEach(() => {
    console.log('environment', environment);
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(<FirebaseOptions>environment.google['firebase'])
      ],
      providers: [
        VakiService
      ]
    });

    // angularFirestoreService = TestBed.inject(AngularFirestore);
    // vakiService = TestBed.inject(VakiService);
  });

  // it('created', inject([VakiService], (vakiService: VakiService) => {
  //   console.log('vakiService', vakiService);
  //   // expect(userAgent).toBe('Fake browser');
  // }));

  it('created', () => {
    vakiService = TestBed.inject(VakiService);
    console.log("vakiService", vakiService);

    // expect(vakiService instanceof VakiService).toBeTruthy();
  });
});
