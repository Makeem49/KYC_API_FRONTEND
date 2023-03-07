import React from 'react';
export async function fetchAll<T>(
  fn: (pageNo: number) => Promise<T[]>,
  pageNo = 1
) {
  const data = await fn(pageNo);

  // console.log(data);

  if (data.length > 0) {
    return data.concat(await fn(pageNo + 1));
  } else {
    return data;
  }
}

export const useDebouncedEffect = (
  effect: React.EffectCallback,
  deps: React.DependencyList,
  delay: number
) => {
  React.useEffect(() => {
    const handler = setTimeout(() => effect(), delay);
    return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...(deps || []), delay]);
};

export function searchText(array: any[], searchTerm: string) {
  let matches = [];
  for (let i = 0; i < array.length; i++) {
    for (let key in array[i]) {
      if (typeof array[i][key] === 'string') {
        if (array[i][key].toLowerCase().includes(searchTerm.toLowerCase())) {
          matches.push(array[i]);
          break;
        }
      }
      if (typeof array[i][key] === 'number') {
        if (array[i][key].toString().includes(searchTerm.toString())) {
          matches.push(array[i]);
          break;
        }
      }
    }
  }
  return matches;
}

export function searchSpecificText(array: any[], searchTerm: string) {
  let matches = [];
  for (let i = 0; i < array.length; i++) {
    for (let key in array[i]) {
      if (typeof array[i][key] === 'string') {
        if (array[i][key].toLowerCase().startsWith(searchTerm.toLowerCase())) {
          matches.push(array[i]);
          break;
        }
      }
      if (typeof array[i][key] === 'number') {
        if (array[i][key].toString().startsWith(searchTerm.toString())) {
          matches.push(array[i]);
          break;
        }
      }
    }
  }
  return matches;
}

export const isDeepEqual = (
  object1: { [key: string]: any },
  object2: { [key: string]: any }
) => {
  const isObject = (object: Object) => {
    return object != null && typeof object === 'object';
  };
  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);
  if (objKeys1.length !== objKeys2.length) return false;
  for (var key of objKeys1) {
    const value1 = object1[key];
    const value2 = object2[key];
    const isObjects = isObject(value1) && isObject(value2);
    if (
      (isObjects && !isDeepEqual(value1, value2)) ||
      (!isObjects && value1 !== value2)
    ) {
      return false;
    }
  }
  return true;
};
// Insert into array in place
export const insert = (arr: any[], index: number, newItem: any) => [
  // part of the array before the specified index
  ...arr.slice(0, index),
  // inserted item
  newItem, // part of the array after the specified index
  ...arr.slice(index),
];

export function get_nested_value(
  obj: { [key: string]: any },
  accessors?: string
): string {
  if (!accessors) return '';

  const keys = accessors.split('.');

  for (let i = 0; i < keys.length; i++) {
    obj = obj[keys[i]];
  }
  return obj as unknown as string;
}
