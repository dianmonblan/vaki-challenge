import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { StateKey, TransferState } from '@angular/platform-browser';

// CUSTOM SERVICES
import { AngularUniversalPlatformService } from '../helpers';
import { ServiceAbstractService } from '../services/service-abstract.service';

// CUSTOM MODELS
import { CreateModelIntance, ModelAbstract } from '@vaki-challenge/models';

@Injectable()
export abstract class FirestoreAbstractService<M extends ModelAbstract> extends ServiceAbstractService<M> {
  #angularFirestore: AngularFirestore;
  protected abstract _modelClass: CreateModelIntance<M>;
  public readonly abstract collectionName: string;
  public readonly abstract stateKey: StateKey<M[]>;

  constructor(
    protected _angularUniversalPlatformService: AngularUniversalPlatformService,
    protected _transferState: TransferState,
    angularFirestore: AngularFirestore,
  ) {
    super();
    this.#angularFirestore = angularFirestore;
  }

  public list(scenario?: string): Observable<M[]> {
    return this.#angularFirestore.collection<M>(
      this.collectionName,
      (collectionReference: CollectionReference) => collectionReference.orderBy("start_date").startAt(0).limit(100)
    ).valueChanges().pipe(
      map((values: M[]) => // Set position
        values.map((values: M, position: number) => {
          values.position = ++position;
          return values;
        })
      ),
      tap((values: M[]) => this.setTransferState(values)),
      map((values: M[]) => values.map((values: M) => this.createModelInstance(values, scenario)))
    );
  }
}