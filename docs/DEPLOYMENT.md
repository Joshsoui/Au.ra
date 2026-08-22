# AU·RA deployment

## Current v0.1
The repository contains a deployable Next.js demo using dummy data only.

## Render
1. Create a new Web Service from `Joshsoui/Au.ra`.
2. Render can detect `render.yaml` or use:
   - Build: `npm install && npm run build`
   - Start: `npm start`
3. Set Node 20.
4. Deploy.

The current visual demo does not require Supabase or OpenAI environment variables.

## Supabase activation
When moving from demo data to live data:
1. Create a Supabase project.
2. Run `supabase/migrations/001_initial.sql`.
3. Add the values from `.env.example` to Render environment variables.
4. Never commit service-role keys or API keys.

## Product rollout
Recommended order:
1. Deploy visual demo.
2. Validate artist onboarding and agency workflow with real managers/artists.
3. Add Supabase auth and tenant isolation.
4. Replace mock roster/releases/opportunities with database reads.
5. Add private file storage for EPK assets and demos.
6. Add server-side AI assessment endpoints.
7. Add human approval gates before any external outreach.

## Public repository warning
Do not add real artist private data, contracts, contact emails, manager notes, API keys or relationship intelligence while this repository is public.
