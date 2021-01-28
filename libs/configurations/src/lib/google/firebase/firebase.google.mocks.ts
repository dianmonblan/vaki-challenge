/**
 * Mock DATABASE CLOUD FIRESTORE `vaki-challenge-application`
 */

import { QueryFn } from '@angular/fire/firestore';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

// CUSTOM LIBRARIES
import { COLLECTIONS_NAME_DATABASE_CLOUD_FIRESTORE } from "./firebase.google";

const DATABASE_CLOUD_FIRESTORE: { [collectionName: string]: any } = {
  [COLLECTIONS_NAME_DATABASE_CLOUD_FIRESTORE.VAKERS]: {
    vakiOne: {
      name: "Vaki name"
    },
    vakiTwo: {
      name: "Vaki two"
    }
  }
}

export class AngularFirestoreCollectionMock<T> {
  #path: string;

  constructor(path: string) {
    this.#path = path;
  }

  valueChanges(): Observable<T[]> {
    return of(Object.values(DATABASE_CLOUD_FIRESTORE[this.#path]));
  }
};

export class AngularFirestoreMock<T> {
  /**
   * Create a reference to a Firestore Collection based on a path or
   * CollectionReference and an optional query function to narrow the result
   * set.
   */
  collection<T>(path: string, queryFn?: QueryFn): AngularFirestoreCollectionMock<T> {
    return new AngularFirestoreCollectionMock<T>(path);
  };
};