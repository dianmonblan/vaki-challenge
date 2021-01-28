import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, CollectionReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { makeStateKey, StateKey, TransferState } from '@angular/platform-browser';

// CUSTOM LIBRARIES
import { COLLECTIONS_NAME_DATABASE_CLOUD_FIRESTORE } from '@vaki-challenge/configurations';
import { VakiModel } from '@vaki-challenge/models';
import { AngularUniversalPlatformService } from '../general';

export const VAKERS_STATE_KEY: StateKey<VakiModel[]> = makeStateKey(COLLECTIONS_NAME_DATABASE_CLOUD_FIRESTORE.VAKERS);

@Injectable()
export class VakiFirestoreService {
  #vakers: VakiModel[];
  #vakersCollection: AngularFirestoreCollection<VakiModel>;
  get collectionName(): string {
    return COLLECTIONS_NAME_DATABASE_CLOUD_FIRESTORE.VAKERS;
  };
  get vakers(): VakiModel[] {
    return this._transferState.get<VakiModel[]>(VAKERS_STATE_KEY, this.#vakers);
  };

  constructor(
    private _angularFirestore: AngularFirestore,
    private _angularUniversalPlatformService: AngularUniversalPlatformService,
    private _transferState: TransferState
  ) {
    this.#vakersCollection = this._angularFirestore.collection<VakiModel>(this.collectionName);
  }

  public add(vaki: VakiModel) {
    this.#vakersCollection.add(vaki);
  }

  public update(vaki: VakiModel) {
    this.#vakersCollection.doc(`${vaki.url}`).update(vaki);
  }

  public delete(vakiURL: string) {
    this.#vakersCollection.doc(`${vakiURL}`).delete();
  }

  public list(): Observable<VakiModel[]> {
    return this._angularFirestore.collection<VakiModel>(
      this.collectionName,
      (collectionReference: CollectionReference) => collectionReference.orderBy("start_date").startAt(0).limit(100)
    ).valueChanges().pipe(
      tap((vakers: VakiModel[]) => {
        if (this._angularUniversalPlatformService.isServer())
          this._transferState.set<VakiModel[]>(VAKERS_STATE_KEY, this.#vakers = vakers)
      })
    );
  }
}