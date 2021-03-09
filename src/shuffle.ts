/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
const shuffle = <T>(input: T[]): T[] => {
    let x: T;
    let j: number;
    let i: number;

    const a = [...input];

    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
};

export default shuffle;
