// CUSTOM CONFIGURATIONS
import { CONFIG } from "./application-general";

describe('configurations', () => {
  describe('configurations', () => {
    describe('application', () => {
      it('should have a version', () =>
        expect(CONFIG).toHaveProperty('version')
      );

      it('should have a homeversion', () =>
        expect(CONFIG).toHaveProperty('homepage')
      );
    });
  });
});
