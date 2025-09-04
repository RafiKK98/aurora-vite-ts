import { use } from 'react';

const cache = new Map<string, boolean>();
const promiseCache = new Map<string, Promise<void>>();

export function useAssetsLoaded(urls: string[]) {
  if (urls.every((url) => cache.get(url))) return true;

  const cacheKey = urls.sort().join('|');

  if (promiseCache.has(cacheKey)) {
    const promise = promiseCache.get(cacheKey)!;
    use(promise);
    return true;
  }

  const promise = Promise.all(
    urls.map((url) =>
      cache.get(url)
        ? Promise.resolve()
        : new Promise<void>((resolve) => {
            const img = new Image();
            img.src = url;
            const done = () => {
              cache.set(url, true);
              resolve();
            };
            if (img.complete) {
              done();
            } else {
              img.onload = img.onerror = done;
            }
          }),
    ),
  ).then(() => {
    promiseCache.delete(cacheKey);
  });

  promiseCache.set(cacheKey, promise);

  use(promise);

  return true;
}
