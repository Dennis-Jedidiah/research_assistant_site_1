// Backend origin. Override per environment with VITE_API_URL in website/.env
// (Vite only exposes vars prefixed with VITE_ to client code).
export const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:5001";
