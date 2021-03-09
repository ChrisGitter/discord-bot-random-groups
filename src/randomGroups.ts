import shuffle from './shuffle';

const randomGroups = (names: string[], groupSize: number = 2) => {
    const maxGroupSize = Math.max(1, groupSize);

    const currentNames = shuffle(names);

    const groups = Array.from(
        Array(Math.ceil(names.length / maxGroupSize))
    ).map(() => [] as string[]);

    const pickRandomAndAssign = () => {
        const randIndex = Math.ceil(Math.random() * (currentNames.length - 1));
        for (let i = 0; i < groups.length; i++) {
            if (groups[i].length >= maxGroupSize) {
                continue;
            }
            groups[i].push(currentNames[randIndex]);
            currentNames.splice(randIndex, 1);
            break;
        }
    };

    while (currentNames.length) {
        pickRandomAndAssign();
    }

    return groups;
};

export default randomGroups;
