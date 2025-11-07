# Stake

Stake is a full‑stack interactive physics simulation web app. The frontend is a React + TypeScript + Vite app that renders an HTML5 Canvas-based ball physics simulation; the backend is a Node.js + TypeScript REST API that manages game state. Frontend is deployable to Vercel and backend to Render..

## Tech stack
- Frontend: React, TypeScript, Vite, Axios, HTML5 Canvas
- Backend: Node.js, TypeScript, Express (REST)
- Dev: npm, tsc
- Deployment examples: Vercel (frontend), Render (backend)

## Features
- Canvas-based BallManager for physics and rendering
- REST API endpoints to create/update game state
- Environment-driven API configuration (VITE_API_URL) for deploy-time switching

## Quickstart (development, Windows PowerShell)
1. Clone repository:
   ```powershell
   git clone https://github.com/kaushikvk2607/stake.git
   cd stake
   ```

2. Backend (run in a separate terminal):
   ```powershell
   cd backend
   npm install
   npm run build      # compile TypeScript to dist/
   npm run start      # runs node dist/index.js
   ```

3. Frontend:
   ```powershell
   cd ..\frontend
   npm install
   # for local development
   npm run dev
   # or build for production
   npm run build
   ```

## Environment variables
- Frontend:
  - VITE_API_URL — base URL of backend API (example: https://stake-am1j.onrender.com). Set in `frontend/.env` or Vercel project settings.
- Backend:
  - Use backend/.env or platform-specific config as needed (port, DB settings, etc).

Example frontend .env:
```
VITE_API_URL=https://stake-am1j.onrender.com
```

## How the frontend connects to backend
The frontend reads the API base from `VITE_API_URL` (falling back to a configured default). API calls use Axios to send requests to `${baseURL}/game` to create game objects (for example, adding a ball).

## Common issues & fixes
- Error: Cannot find module '.../backend/dist/index.js'
  - Fix: compile backend before start: `cd backend && npm run build` then `npm run start`.
- TypeScript build errors TS6133 (declared but never used)
  - Example fix: remove unused imports/variables or ignore the unused state variable by skipping it in destructuring: `const [, setOutputs] = useState(...)`.
- If CORS errors appear, enable CORS on the backend for your frontend origin.

## Deployment notes
- Vercel: set `VITE_API_URL` in project Environment Variables to your backend URL.
- Render: deploy backend and ensure CORS allows frontend origin.

## Contributing
- Open issues or PRs. Follow project TypeScript rules and run `npm run build` in both packages before pushing.

## License
MIT
