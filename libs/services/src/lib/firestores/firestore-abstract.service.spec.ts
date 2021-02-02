import { TestBed } from '@angular/core/testing';
import { AngularFireModule, FirebaseOptions } from '@angular/fire';
import { environment } from '@vaki-challenge/apps/vakers/src/environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable, PLATFORM_ID } from '@angular/core';
import { BrowserTransferStateModule, makeStateKey, StateKey } from '@angular/platform-browser';

// CUSTOM SERVICES
import { FirestoreAbstractService } from './firestore-abstract.service';
import { AngularUniversalPlatformService } from "../helpers/angular-universal-platform.service";
import { ServiceAbstractService } from '../services/service-abstract.service';

// MOCK DATABASE CLOUD FIRESTORE VAKI CHALLENGE APPLICATION
import { AngularFirestoreMock } from "@vaki-challenge/configurations/test";

// CUSTOM MODELS
import { CreateModelIntance, Model, ModelAbstract } from '@vaki-challenge/models';

class TestModel extends ModelAbstract { }

@Injectable()
class TestService extends FirestoreAbstractService<TestModel>{
  protected _modelClass: CreateModelIntance<TestModel> = TestModel;
  public collectionName: string = 'tests';
  public stateKey: StateKey<TestModel[]> = makeStateKey('tests');
}

describe('services', () => {
  describe('firestores', () => {
    describe('FirestoreAbstractService', () => {
      let testService: TestService;

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
            TestService,
            {
              provide: PLATFORM_ID,
              useValue: 'browser'
            },
            AngularUniversalPlatformService
          ]
        });

        testService = TestBed.inject(TestService);
      });

      it(`should existing and extending 'ServiceAbstractService'`, () => {
        expect(testService).toBeInstanceOf(FirestoreAbstractService)
        expect(testService).toBeInstanceOf(ServiceAbstractService)
      });

      it(`should have a property 'collectionName'`, () =>
        expect(testService.collectionName).not.toBeNull()
      );

      it(`should have a method 'document'`, (done: Function) =>
        testService.document('testOne')
          .subscribe((model: Model) => {
            expect(model).toHaveProperty('name');
            done();
          })
      );

      it(`should have a method 'list'`, (done: Function) =>
        testService.list()
          .subscribe((models: Model[]) => {
            expect(Array.isArray(models)).toBeTruthy();
            done();
          })
      );
    });
  });
});