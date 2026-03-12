// Same-origin /api so Vercel serverless handles it (no CORS). In dev, Vite proxies /api to backend.
export const API_BASE = import.meta.env.VITE_API_BASE || "https://api.digitalstriker.in";
