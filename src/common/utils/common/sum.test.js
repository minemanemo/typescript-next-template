import sum from './sum';

describe('sum util function', () => {
  it('1 + 2 = 3', () => {
    const a = 1;
    const b = 2;

    const result = sum(a, b);

    expect(result).toEqual(3);
  });
});
