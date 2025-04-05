import * as Types from '@/shared/types';

export const getIndexListWithGroupedAlphabeticalSorting = function <
    T extends Types.Project.AnyProjectModels,
    K extends keyof T,
    S extends keyof T,
>(array: T[], keyCache: K, sortKey?: S): Array<T[K]> {
    return array
        .slice()
        .sort((a, b) => {
            const getTypeWeight = (item: T): number => {
                if (item.type === Types.Project.ElementTypes.FOLDER) return 0;
                if (item.type === Types.Project.ElementTypes.PAGE) return 1;
                return 2; // fallback for unexpected types
            };

            const typeDiff = getTypeWeight(a) - getTypeWeight(b);
            if (typeDiff !== 0) return typeDiff;

            const aValue = String(a[sortKey ?? keyCache]);
            const bValue = String(b[sortKey ?? keyCache]);
            return aValue.localeCompare(bValue);
        })
        .map((item) => item[keyCache])
        .filter((item): item is T[K] => item !== null && item !== undefined);
};
