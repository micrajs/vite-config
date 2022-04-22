function isObject(item: any) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

export function deepMerge<T>(target: T, ...sources: Partial<T>[]): T {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target as any, { [key]: {} });
        deepMerge(target[key], source[key] as any);
      } else {
        Object.assign(target as any, { [key]: source[key] });
      }
    }
  }

  return deepMerge(target, ...sources);
}
