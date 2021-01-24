import { FIREBASE_GOOGLE } from "./firebase.google";

describe('configurations ', () => {
  describe('google', () => {
    describe('firebase', () => {
      it('should have a apiKey', () =>
        expect(FIREBASE_GOOGLE).toHaveProperty('apiKey')
      );

      it('should have a authDomain', () =>
        expect(FIREBASE_GOOGLE).toHaveProperty('authDomain')
      );

      it('should have a projectId', () =>
        expect(FIREBASE_GOOGLE).toHaveProperty('projectId')
      );

      it('should have a storageBucket', () =>
        expect(FIREBASE_GOOGLE).toHaveProperty('storageBucket')
      );

      it('should have a messagingSenderId', () =>
        expect(FIREBASE_GOOGLE).toHaveProperty('messagingSenderId')
      );

      it('should have a appId', () =>
        expect(FIREBASE_GOOGLE).toHaveProperty('appId')
      );
    });
  });
});
