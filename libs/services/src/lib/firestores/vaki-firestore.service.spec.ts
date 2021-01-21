import { TestBed } from '@angular/core/testing';
import { AngularFireModule, FirebaseOptions } from '@angular/fire';
import { environment } from '@vaki-challenge/apps/vakers/src/environments/environment';

// CUSTOM SERVICES
import { VakiFirestoreService } from "./vaki-firestore.service";

describe('VakiFirestoreService', () => {
  let vakiService: VakiFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(<FirebaseOptions>environment.google['firebase'])
      ],
      providers: [
        VakiFirestoreService
      ]
    });

    vakiService = TestBed.inject(VakiFirestoreService);
  });

  it('created instance', () => {
    expect(vakiService).toBeInstanceOf(VakiFirestoreService);
  });

  it('declared collection name', () => {
    expect(vakiService.collectionName).not.toBeNull();
  });
});
