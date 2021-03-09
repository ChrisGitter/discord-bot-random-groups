import shuffle from './shuffle';

it('shuffles', () => {
    const base = [1, 2, 3, 4, 5, 6];
    Object.freeze(base);
    const shuffled = shuffle(base);

    expect(shuffled).not.toEqual(base);
    expect(shuffled).toEqual(expect.arrayContaining(base));
    expect(shuffled.length).toEqual(base.length);
});

it('handles empty lists', () => {
    expect(shuffle([])).toEqual([]);
});
