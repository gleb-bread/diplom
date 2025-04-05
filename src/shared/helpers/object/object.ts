export const getIndexListByAlphabeticalSorting = function <
    T,
    K extends keyof T,
    S extends keyof T,
>(array: T[], keyCache: K, sortKey?: S): Array<T[K]> {
    return array
        .slice()
        .sort((a, b) => {
            const aValue = String(a[sortKey ?? keyCache]);
            const bValue = String(b[sortKey ?? keyCache]);
            return aValue.localeCompare(bValue);
        })
        .map((item) => item[keyCache])
        .filter((item): item is T[K] => item !== null && item !== undefined);
};
