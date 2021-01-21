// CUSTON CONFIGURATIONS
import { CONFIG, FIREBASE_GOOGLE } from "./configurations";

describe('configurations', () => {
  describe('general', () => {
    it('declared', () => {
      expect(Object.keys(CONFIG)).toHaveLength(2);
    });
  });

  describe('google', () => {
    describe('firebase', () => {
      it('declared', () => {
        expect(Object.keys(FIREBASE_GOOGLE)).toHaveLength(6);
      });
    });
  });
});
