// Use Vite environment variable VITE_API_URL when available, otherwise fall back to the deployed backend URL.
// Set VITE_API_URL in your deployment (Vercel) or locally via a .env file when developing.
export const baseURL = (import.meta.env.VITE_API_URL as string) || "https://stake-am1j.onrender.com";
