import { useEffect, useState } from "react";

export default function useFetch(url, cacheName = null) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        // 1. Load cache first
        if (cacheName) {
          const cached = localStorage.getItem(cacheName);
          if (cached) {
            setData(JSON.parse(cached));
            setLoading(false);
            return;
          }
        }

        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error("Network response was not OK");

        const json = await res.json();
        setData(json);

        // 3. Cache result
        if (cacheName) {
          localStorage.setItem(cacheName, JSON.stringify(json));
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    return () => controller.abort();
  }, [url, cacheName]);

  return { data, loading, error };
}
