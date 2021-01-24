// CUSTON CONFIGURATIONS
import { CONFIG, FIREBASE_GOOGLE } from "./configurations";

describe('configurations', () => {
  describe('general', () => {
    it('should have application', () =>
      expect(Object.keys(CONFIG)).toHaveLength(2)
    );
  });

  describe('google', () => {
    describe('should have firebase', () => {
      it('declared', () =>
        expect(Object.keys(FIREBASE_GOOGLE)).toHaveLength(6)
      );
    });
  });
});
