/**
 * Mock data base CLOUD FIRESTORE `vaki-challenge-application`
 */

import { mockFirebase } from 'ts-mock-firebase';

// CUSTOM LIBRARIES
import { FIREBASE_GOOGLE, COLLECTIONS_FIREBASE_GOOGLE } from "./firebase.google";

export const mockFirebaseNamespace = mockFirebase();
export const mockFirebaseApp = mockFirebaseNamespace.initializeApp(FIREBASE_GOOGLE);
const firestore = mockFirebaseApp.firestore();

firestore.mocker.loadCollection(COLLECTIONS_FIREBASE_GOOGLE.VAKERS, {
  vakiOne: {
    name: "Vaki name"
  }
});

export { firestore };

describe('services', () => {
  describe('firestores', () => {
    describe('vaki challenge application mocks', () => {
      it(`should have a collection name '${COLLECTIONS_FIREBASE_GOOGLE.VAKERS}'`, () =>
        expect(firestore.mocker.collection(COLLECTIONS_FIREBASE_GOOGLE.VAKERS)).not.toBeUndefined()
      );
    });
  });
});