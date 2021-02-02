import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { makeStateKey, StateKey, TransferState } from '@angular/platform-browser';

// CUSTOM MODELS
import { CreateModelIntance, ModelAbstract } from '@vaki-challenge/models';

// CUSTOM SERVICES
import { AngularUniversalPlatformService } from '@vaki-challenge/services';

@Injectable()
export abstract class ServiceAbstractService<M extends ModelAbstract> {
  #document: M;
  #documents: M[];
  #stateKeyDocument: StateKey<M>;
  #stateKeyList: StateKey<M[]>;
  protected readonly abstract _modelClass: CreateModelIntance<M>;
  protected abstract _angularUniversalPlatformService: AngularUniversalPlatformService;
  protected abstract _transferState: TransferState;
  public readonly abstract stateKey: StateKey<M>;

  protected createModelInstance(values: M, scenario?: string): M {
    let modelInstance: M = new this._modelClass();
    modelInstance.scenario = scenario;
    modelInstance.setValues(values);
    return modelInstance;
  }

  private createMakeStateKeyDocument(): void {
    if (!this.#stateKeyDocument)
      this.#stateKeyDocument = makeStateKey<M>(`${this.stateKey.toString()}_document`);
  }

  private createMakeStateKeyList(): void {
    if (!this.#stateKeyList)
      this.#stateKeyList = makeStateKey<M[]>(`${this.stateKey.toString()}_list`);
  }

  protected setTransferStateDocument(value: M): void {
    this.createMakeStateKeyDocument();

    if (this._angularUniversalPlatformService.isServer())
      this._transferState.set<M>(this.#stateKeyDocument, this.#document = value);
  }

  protected setTransferStateList(values: M[]): void {
    this.createMakeStateKeyList();

    if (this._angularUniversalPlatformService.isServer())
      this._transferState.set<M[]>(this.#stateKeyList, this.#documents = values);
  }

  public getDocument(scenario?: string): M {
    this.createMakeStateKeyDocument();

    let values: M = this._transferState.get<M>(this.#stateKeyDocument, this.#document);
    return values ? this.createModelInstance(values, scenario) : values;
  };

  public getDocuments(scenario?: string): M[] {
    this.createMakeStateKeyList();

    return this._transferState.get<M[]>(this.#stateKeyList, this.#documents)
      ?.map((values: M, position: number) => {
        values.position = ++position;
        return this.createModelInstance(values, scenario);
      });
  };

  public abstract document(id: string, scenario?: string): Observable<M>;
  public abstract list(scenario?: string): Observable<M[]>;
}