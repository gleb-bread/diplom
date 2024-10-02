export async function setCacheData(cacheName: string, requestUrl: string, responseData: Response) {
    try {
      const cache = await caches.open(cacheName);
      await cache.put(requestUrl, responseData);
    } catch (error) {
      console.error("Error caching data:", error);
    }
  }
  
  export async function getCacheData(cacheName: string, requestUrl: string): Promise<Response | null> {
    try {
      const cache = await caches.open(cacheName);
      const cachedResponse = await cache.match(requestUrl);
  
      if (!cachedResponse) {
        return null;
      }

      return cachedResponse;
    } catch (error) {
      console.error("Error reading cache data:", error);
      return null;
    }
  }
  