import randomGroups from './randomGroups';
import shuffle from './shuffle';

// dont shuffle
jest.mock('./shuffle', () => jest.fn((obj: any[]) => obj));

it('pairs some names', () => {
    const names = ['a', 'b', 'c', 'd', 'e', 'f'];

    const groups = randomGroups(names);
    expect(groups).toHaveLength(3);
    expect(groups.flatMap((x) => x)).toEqual(expect.arrayContaining(names));
});

it('also returns partially filled groups', () => {
    const names = ['a', 'b', 'c'];
    const paired = randomGroups(names);
    expect(paired).toHaveLength(2);
});

it('uses shuffle to randomize the list', () => {
    const names = ['a', 'b', 'c', 'd', 'e', 'f'];
    randomGroups(names);
    expect(shuffle).toHaveBeenCalledWith(names);
});

it('can handle large group sizes', () => {
    const groups = randomGroups(['a', 'b'], 100);
    expect(groups).toEqual([expect.arrayContaining(['a', 'b'])]);
});

it('can handle large group sizes', () => {
    const groups = randomGroups(['a', 'b', 'c', 'd', 'e'], 4);
    expect(groups[0]).toHaveLength(4);
    expect(groups[1]).toHaveLength(1);
});
