export function classNames(
    classes: string[],
): string {
    return classes.reduce((
        sum: string,
        item: string
    ) => {
        if (typeof item === 'string' && item !== '') {
            return `${sum} ${item}`;
        }

        return sum;
    }, '');
};
