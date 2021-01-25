import {greet} from './greet';

describe('greet', () => {
  it('should include name in return message', () => {
  // const result = greet('Denis');
  // expect(result).toBe('Hello Denis');

    // expect(greet('Denis')).toBe('Hello Denis');

    expect(greet('Denis')).toContain('Denis');
  });
});
