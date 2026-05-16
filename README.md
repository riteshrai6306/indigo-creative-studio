# Indigo Creative Studio

A fast-start scaffold for a premium AI-powered marketing creative platform targeting Indigo Airlines teams.

## What is included

- Next.js 15 App Router with TypeScript
- Tailwind CSS styling and a minimal Indigo-inspired theme
- Prisma schema for PostgreSQL with AI request and project models
- Core pages: landing page, dashboard, projects, explore, studio
- Basic UI shell for fast iteration

## Quick start (one hour)

1. Install dependencies:
   ```bash
   cd c:\Users\HP\Documents\Indigo_Creative_Studio
   npm install
   ```
2. Copy `.env.example` to `.env` and fill in your keys:
   ```bash
   copy .env.example .env
   ```

   ```env
   DATABASE_URL="file:./dev.db"
   AZURE_OPENAI_API_KEY="your-azure-openai-key"
   AZURE_OPENAI_ENDPOINT="https://<your-resource-name>.openai.azure.com"
   AZURE_OPENAI_DEPLOYMENT="your-deployment-name"
   GEMINI_API_KEY="your-gemini-api-key"
   ```
3. Create and sync the SQLite database, then generate Prisma client:
   ```bash
   npx prisma db push
   npx prisma generate
   ```
4. Run development server:
   ```bash
   npm run dev
   ```

## One-hour build plan

1. Build landing page and dashboard basic UI.
2. Wire pages with Next.js routes.
3. Add AI API helpers in `lib/ai/*`.
4. Add reusable components in `components/ui/`.
5. Implement Prisma models and one API route for AI requests.
6. Iterate on Studio workflow and prompt generation.

## Architecture notes

- Feature-based pages in `app/`.
- Shared UI components under `components/`.
- State and AI pipeline helpers in `store/` and `lib/`.
- Prisma for backend data modeling.

## Suggested next step

Create small reusable atoms first:
- `components/ui/button.tsx`
- `components/ui/card.tsx`
- `lib/ai/openai.ts`
- `lib/ai/prompt.ts`
- `store/useStudioStore.ts`

Then add one API route for prompt + image generation.
