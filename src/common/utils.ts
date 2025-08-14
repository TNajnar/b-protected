export function toDictionary<T>(
    collection: T[],
    iteratee: ((item: T) => string | number) | string
): Record<string | number, T> {
    if (!collection || !Array.isArray(collection)) {
        return {};
    }

    // Handle property name string as iteratee
    const keySelector: (item: T) => string | number = typeof iteratee === 'string'
        ? (item: T): string | number => item[iteratee as keyof T] as unknown as string | number
        : iteratee;

    // Use reduce to build the object
    return collection.reduce<Record<string | number, T>>(
        (result, item): Record<string | number, T> => {
            const key = keySelector(item);

            result[key] = item;

            return result;
        }, {}
    );
}

/* #region Generate ID - Just for primitive static data */

export function generateId(): number {
    return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
}

/* #endregion */
