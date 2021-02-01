import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StateKey, TransferState } from '@angular/platform-browser';

// CUSTOM MODELS
import { CreateModelIntance, ModelAbstract } from '@vaki-challenge/models';

// CUSTOM SERVICES
import { AngularUniversalPlatformService } from '@vaki-challenge/services';

@Injectable()
export abstract class ServiceAbstractService<M extends ModelAbstract> {
  protected _documents: M[];
  protected abstract _modelClass: CreateModelIntance<M>;
  protected abstract _angularUniversalPlatformService: AngularUniversalPlatformService;
  protected abstract _transferState: TransferState
  public readonly abstract stateKey: StateKey<M[]>;

  protected createModelInstance(values: M, scenario?: string): M {
    let modelInstance: M = new this._modelClass();
    modelInstance.scenario = scenario;
    modelInstance.setValues(values);
    return modelInstance;
  }

  protected setTransferState(values: M[]): void {
    if (this._angularUniversalPlatformService.isServer())
      this._transferState.set<M[]>(this.stateKey, this._documents = values);
  }

  public getDocuments(scenario?: string): M[] {
    return this._transferState.get<M[]>(this.stateKey, this._documents)
      ?.map((values: M, position: number) => {
        values.position = ++position;
        return this.createModelInstance(values, scenario);
      });
  };

  public abstract list(scenario?: string): Observable<M[]>;
}