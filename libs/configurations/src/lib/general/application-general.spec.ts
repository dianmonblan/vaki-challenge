// CUSTOM CONFIGURATIONS
import { CONFIG } from "./application-general";

describe('configurations general', () => {
  describe('application', () => {
    it('declared version', () => {
      expect(CONFIG).toHaveProperty('version');
    });

    it('declared homeversion', () => {
      expect(CONFIG).toHaveProperty('homepage');
    });
  });
});
