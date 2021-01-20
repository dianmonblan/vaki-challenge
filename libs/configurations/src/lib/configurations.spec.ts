import { CONFIG } from "./general";
import { FIREBASE_GOOGLE } from "./google";

describe('configurations', () => {
  describe('general', () => {
    it('declared version', () => {
      expect(CONFIG).toHaveProperty('version');
    });

    it('declared homeversion', () => {
      expect(CONFIG).toHaveProperty('homepage');
    });
  });

  describe('google', () => {
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
});
