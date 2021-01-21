import { FIREBASE_GOOGLE } from "./firebase.google";

describe('configurations google', () => {
  describe('firebase', () => {
    it('declared apiKey', () => {
      expect(FIREBASE_GOOGLE).toHaveProperty('apiKey');
    });

    it('declared authDomain', () => {
      expect(FIREBASE_GOOGLE).toHaveProperty('authDomain');
    });

    it('declared projectId', () => {
      expect(FIREBASE_GOOGLE).toHaveProperty('projectId');
    });

    it('declared storageBucket', () => {
      expect(FIREBASE_GOOGLE).toHaveProperty('storageBucket');
    });

    it('declared messagingSenderId', () => {
      expect(FIREBASE_GOOGLE).toHaveProperty('messagingSenderId');
    });

    it('declared appId', () => {
      expect(FIREBASE_GOOGLE).toHaveProperty('appId');
    });
  });
});
