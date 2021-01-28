import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, CollectionReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// CUSTOM LIBRARIES
import { COLLECTIONS_NAME_DATABASE_CLOUD_FIRESTORE } from '@vaki-challenge/configurations';
import { VakiModel } from '@vaki-challenge/models';

@Injectable()
export class VakiFirestoreService {
  #vakersCollection: AngularFirestoreCollection<VakiModel>;
  get collectionName(): string {
    return COLLECTIONS_NAME_DATABASE_CLOUD_FIRESTORE.VAKERS;
  };

  constructor(
    private _angularFirestore: AngularFirestore
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
    /**
     * Required for unit tests when using the module Ts-Mock-Firebase
     * used Promises and not Observable.
     *
     * We turn Promise into Observable.
     */
    return this._angularFirestore.collection<VakiModel>(
      this.collectionName,
      (collectionReference: CollectionReference) => collectionReference.orderBy("start_date").startAt(0).limit(100)
    ).valueChanges();
  }
}