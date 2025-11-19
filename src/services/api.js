const API_BASE = "/api";  // proxy para Flask

export async function fetchCars(signal) {
  const res = await fetch(`${API_BASE}/anuncio`, { signal })  // <-- /anuncio
  if (!res.ok) throw new Error(`Erro ${res.status}`)
  return res.json()
}
