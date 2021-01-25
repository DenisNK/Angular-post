import {countries} from './countries';

describe('countries', () => {
  it('should countain countries  codes', () => {
    const result = countries();

    expect(result).toContain('RU');
    expect(result).toContain('UA');
    expect(result).toContain('BY');
  });
});
