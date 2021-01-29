import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { StateKey, TransferState } from '@angular/platform-browser';

// CUSTOM SERVICES
import { AngularUniversalPlatformService } from '../general';

@Injectable()
export abstract class FirestoreService<T> {
  #documents: T[];
  public readonly abstract collectionName: string;
  public readonly abstract stateKey: StateKey<T[]>;
  get documents(): T[] {
    return this._transferState.get<T[]>(this.stateKey, this.#documents);
  };

  constructor(
    private _angularFirestore: AngularFirestore,
    private _angularUniversalPlatformService: AngularUniversalPlatformService,
    private _transferState: TransferState
  ) { }

  public add(vaki: T) {
    // this.#angularFirestoreCollection.add(vaki);
  }

  public update(vaki: T) {
    // this.#angularFirestoreCollection.doc(`${vaki.url}`).update(vaki);
  }

  public delete(vakiURL: string) {
    // this.#angularFirestoreCollection.doc(`${vakiURL}`).delete();
  }

  public list(): Observable<T[]> {
    return this._angularFirestore.collection<T>(
      this.collectionName,
      (collectionReference: CollectionReference) => collectionReference.orderBy("start_date").startAt(0).limit(100)
    ).valueChanges().pipe(
      tap((documents: T[]) => {
        if (this._angularUniversalPlatformService.isServer())
          this._transferState.set<T[]>(this.stateKey, this.#documents = documents)
      })
    );
  }
}