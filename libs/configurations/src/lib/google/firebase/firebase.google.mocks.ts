/**
 * Mock DATABASE CLOUD FIRESTORE `vaki-challenge-application`
 */

import { QueryFn } from '@angular/fire/firestore';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

// CUSTOM CONFIGURATIONS
import { COLLECTIONS_NAME_DATABASE_CLOUD_FIRESTORE } from "./firebase.google";

const DATABASE_CLOUD_FIRESTORE: { [collectionName: string]: any } = {
  tests: {
    testOne: {
      name: "Test one"
    }
  },
  [COLLECTIONS_NAME_DATABASE_CLOUD_FIRESTORE.VAKERS]: {
    vakiOne: {
      name: "Vaki name"
    },
    vakiTwo: {
      name: "Vaki two"
    }
  }
}

export class AngularFirestoreDocumentMock<T> {
  #path: string;

  constructor(path: string) {
    this.#path = path;
  }

  valueChanges(): Observable<T[]> {
    const [collectionName, id] = this.#path.split('/');
    return of(DATABASE_CLOUD_FIRESTORE[collectionName]?.[id]);
  }
};

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
   * Create a reference to a Firestore Document based on a path or
   * DocumentReference. Note that documents are not queryable because they are
   * simply objects. However, documents have sub-collections that return a
   * Collection reference and can be queried.
   */
  doc<T>(path: string): AngularFirestoreDocumentMock<T> {
    return new AngularFirestoreDocumentMock<T>(path);
  }

  /**
   * Create a reference to a Firestore Collection based on a path or
   * CollectionReference and an optional query function to narrow the result
   * set.
   */
  collection<T>(path: string, queryFn?: QueryFn): AngularFirestoreCollectionMock<T> {
    return new AngularFirestoreCollectionMock<T>(path);
  };
};