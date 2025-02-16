export function getMissingStrings(targets: string[], compares: string[]): string[] {
  const missingStrings: string[] = [];

  //   const sortedUniqueTargets: string[] = [...new Set(targets.filter((v) => v))].sort();
  //   const sortedUniqueCompares: string[] = [...new Set(compares.filter((v) => v))].sort();

  let i = 0;
  let j = 0;

  // 두 정렬된 배열을 비교하며 없는 ID를 찾음
  while (i < targets.length) {
    const v1 = compares[i] as string;
    const v2 = compares[j] as string | undefined;
    if (!v2 || v1 < v2) {
      missingStrings.push(v1);
      i++;
    } else if (v1 > v2) {
      j++;
    } else {
      i++;
      j++;
    }
  }

  return missingStrings;
}

/**
 * Compares two arrays of objects, each containing an `id` property, and returns an array
 * of objects from the `targets` array whose IDs are not present in the `compares` array.
 * targets and compares must be sorted(descending) and unique.
 *
 * @template T1 - Type of objects in the `targets` array, must contain an `id` property.
 * @template T2 - Type of objects in the `compares` array, must contain an `id` property.
 *
 * @param {T1[]} targets - The array of objects to check for missing items.
 * @param {T2[]} compares - The array of objects to compare against.
 *
 * @returns {T1[]} An array of objects from `targets` that are missing in `compares`.
 */

export function getMissingItems<T1 extends { id: string }, T2 extends { id: string }>(
  targets: T1[],
  compares: T2[],
): T1[] {
  const missingItems: T1[] = [];

  //   const sortedUniqueTargets: string[] = [...new Set(targets.filter((v) => v))].sort();
  //   const sortedUniqueCompares: string[] = [...new Set(compares.filter((v) => v))].sort();

  let i = 0;
  let j = 0;

  // 두 정렬된 배열을 비교하며 없는 ID를 찾음
  while (i < targets.length) {
    const v1 = targets[i]?.id as string;
    const v2 = compares[j]?.id as string | undefined;
    if (!v2 || v1 > v2) {
      targets[i] && missingItems.push(targets[i] as T1);
      i++;
    } else if (v1 < v2) {
      j++;
    } else {
      i++;
      j++;
    }
  }
  return missingItems;
}

//  isher-Yates Shuffle Algorithm
export function shuffleArray<T>(array: Array<T>) {
  const newArray = [...array];
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const temp = newArray[i];
    newArray[i] = newArray[randomIndex] as T;
    newArray[randomIndex] = temp as T;
  }
  return newArray;
}
