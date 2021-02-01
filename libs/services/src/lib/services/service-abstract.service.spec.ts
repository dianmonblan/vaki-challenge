import { makeStateKey, StateKey, TransferState } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';

// CUSTOM SERVICES
import { AngularUniversalPlatformService } from "../helpers/angular-universal-platform.service";
import { ServiceAbstractService } from '../services/service-abstract.service';

// CUSTOM MODELS
import { CreateModelIntance, ModelAbstract } from '@vaki-challenge/models';

class TestModel extends ModelAbstract { }

class ServiceTest extends ServiceAbstractService<TestModel>{
  protected _modelClass: CreateModelIntance<TestModel> = TestModel;
  protected _angularUniversalPlatformService: AngularUniversalPlatformService = new AngularUniversalPlatformService('blowser');
  protected _transferState: TransferState = new TransferState();
  public stateKey: StateKey<TestModel[]> = makeStateKey('tests');
  public list(scenario?: string): Observable<TestModel[]> {
    return of(null);
  }
}

describe('services', () => {
  describe('services', () => {
    describe('ServiceAbstractService', () => {
      let serviceTest: ServiceTest = new ServiceTest();

      it('should existing', () =>
        expect(serviceTest).toBeInstanceOf(ServiceAbstractService)
      );

      it(`should have a property 'stateKey'`, () =>
        expect(serviceTest.stateKey).not.toBeNull()
      );

      it(`should have a method 'getDocuments'`, () =>
        expect(serviceTest.getDocuments()).toBeUndefined()
      );

      it(`should have a method 'list'`, (done: Function) =>
        serviceTest.list().subscribe((models: TestModel[]) => {
          expect(models).toBeNull();
          done();
        })
      );
    });
  });
});