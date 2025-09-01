import { useEffect, useState } from "react";

type Health = { status?: string; version?: string };

export default function Health() {
  const [data, setData] = useState<Health>({});
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const url = `${import.meta.env.VITE_API_URL}/api/v1/health/`;
    fetch(url)
      .then((r) => r.json())
      .then(setData)
      .catch((e) => setError(String(e)));
  }, []);

  return (
    <main style={{ padding: 24 }}>
      <h1>Health</h1>
      {error ? <p>error: {error}</p> : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </main>
  );
}
