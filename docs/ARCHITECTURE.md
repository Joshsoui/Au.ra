# AU·RA — Architecture

## Principles

- Multi-tenant from day one via organizations
- Artist data and agency relationship data are separated by permissions
- Human-in-the-loop for external outreach and representation decisions
- AI outputs are recommendations, not authoritative decisions
- Keep V0.1 simple enough to deploy and iterate quickly

## Proposed stack

### App
- Next.js
- TypeScript
- Tailwind CSS
- Server actions / route handlers where appropriate

### Backend services
- Supabase Auth
- Supabase Postgres
- Supabase Storage
- Row Level Security

### AI
- OpenAI API
- Structured outputs for assessments and recommendations
- Prompt/version logging for reproducibility

### Hosting
- Render web service connected to GitHub
- Environment variables for Supabase and OpenAI secrets

## Product surfaces

### Public
- Landing page
- Artist value proposition
- Apply / create artist profile
- Representation explanation

### Artist portal
- Dashboard
- Profile
- Music
- Assessment
- Next Moves
- Representation
- Settings

### Agency portal
- Dashboard
- Scouting
- Artists / roster
- Releases
- Network
- Opportunities
- Tasks
- Intelligence
- Organization settings

## Security model

Every core record belongs to an organization or artist account.

Agency-only data includes:
- Private contact details
- Relationship strength
- Internal notes
- Deal notes
- Opportunity rationale
- Internal scoring
- Outreach history

Artists should only see explicitly artist-facing assessment content and opportunities approved for them.

## AI workflow pattern

1. Collect structured source data
2. Validate required inputs
3. Send minimal relevant context to model
4. Require structured response
5. Store output with model/prompt version
6. Present as recommendation with rationale
7. Allow manager override

## First implementation order

1. App shell + auth
2. Organizations + roles
3. Artist onboarding/profile
4. Demo/music upload
5. Assessment model and UI
6. Next Moves
7. Representation application
8. Agency scouting inbox
9. Roster
10. Releases
11. Network CRM
12. Opportunities
13. Tasks
14. AU·RA Intelligence summaries

## Future integrations

Potential later integrations:
- Spotify / streaming analytics
- Instagram/TikTok/YouTube public metrics where permitted
- Email integration for manager-approved outreach
- Calendar / booking availability
- E-sign / contracts
- Accounting / royalties

Integrations should only be added once the manual product workflow is proven.
