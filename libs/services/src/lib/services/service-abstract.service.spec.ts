import { makeStateKey, StateKey, TransferState } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';

// CUSTOM SERVICES
import { AngularUniversalPlatformService } from "../helpers/angular-universal-platform.service";
import { ServiceAbstractService } from '../services/service-abstract.service';

// CUSTOM MODELS
import { CreateModelIntance, Model, ModelAbstract } from '@vaki-challenge/models';

class TestModel extends ModelAbstract { }

class TestService extends ServiceAbstractService<TestModel>{
  protected _modelClass: CreateModelIntance<TestModel> = TestModel;
  protected _angularUniversalPlatformService: AngularUniversalPlatformService = new AngularUniversalPlatformService('blowser');
  protected _transferState: TransferState = new TransferState();
  protected _nameStateKeyName: string = 'tests';
  public document(id: string, scenario?: string): Observable<TestModel> {
    return of(null);
  }
  public list(scenario?: string): Observable<TestModel[]> {
    return of(null);
  }
}

describe('services', () => {
  describe('services', () => {
    describe('ServiceAbstractService', () => {
      let testService: TestService = new TestService();

      it('should existing', () =>
        expect(testService).toBeInstanceOf(ServiceAbstractService)
      );

      it(`should have a method 'getDocument'`, () =>
        expect(testService.getDocument()).toBeUndefined()
      );

      it(`should have a method 'getDocuments'`, () =>
        expect(testService.getDocuments()).toBeUndefined()
      );

      it(`should have a abstract method 'document'`, (done: Function) =>
        testService.document(null)
          .subscribe((model: Model) => {
            expect(model).toBeNull();
            done();
          })
      );

      it(`should have a abstract method 'list'`, (done: Function) =>
        testService.list().subscribe((models: TestModel[]) => {
          expect(models).toBeNull();
          done();
        })
      );
    });
  });
});