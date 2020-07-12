export function findFirstOrUndefined<T>(array: T[]) {
    return array.find(() => true);
}

export function extractFirstOr<F, E>(array: F[], extractor: (first: F) => E, fallback: E) {
    const first = findFirstOrUndefined(array);

    return first !== undefined ? extractor(first) : fallback;
}

export function sortBy<T>(array: T[], getSortCriteria: (element: T) => number, desc: boolean = false) {
    const sorted = array.sort((elementA, elementB) => getSortCriteria(elementA) - getSortCriteria(elementB))

    if (desc) {
        return sorted.reverse();
    }

    return sorted;
}
