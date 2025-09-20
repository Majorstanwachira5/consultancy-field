
DataProtect Co. — User-side Demo Site
====================================

This is a runnable Next.js demo scaffold (Pages Router) intended to demonstrate a user-facing site for a data protection consultancy.
It includes:
- Landing pages (Home, Services)
- Signup / Login (mock in-memory API routes)
- User dashboard with simple media and quick actions
- Tailwind CSS setup files
- A simple SVG logo

How to run locally:
1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Open http://localhost:3000

Important notes:
- The auth API routes use an in-memory store (global variables). This is for demo purposes only and not suitable for production.
- For production you should integrate a real database (Postgres + Prisma), proper password hashing, secure sessions or JWTs, SSO, and encryption of sensitive data.
- I can help wire up Prisma, Postgres, SSO, or implement secure upload endpoints and storage (S3 / GCS) on request.
