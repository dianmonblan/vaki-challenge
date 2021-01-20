import { CONFIG } from './configurations';

describe('configurations', () => {
  it('should CONFIG', () => {
    expect(CONFIG).toHaveProperty('version');
    expect(CONFIG).toHaveProperty('homepage');
  });

  it('should GOOGLE firebase', () => {
    expect(CONFIG).toHaveProperty('firebase');
  });
});
