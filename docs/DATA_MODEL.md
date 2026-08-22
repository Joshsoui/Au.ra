# AU·RA — Initial Data Model

## Core entities

### organizations
Represents an agency/company using AU·RA.

Fields:
- id
- name
- slug
- plan
- created_at

### users
Application users linked to auth.

Fields:
- id
- email
- full_name
- created_at

### organization_members
Links users to organizations.

Fields:
- organization_id
- user_id
- role (`owner`, `manager`, `staff`)

### artists
Canonical artist record.

Fields:
- id
- organization_id (nullable before agency relationship)
- owner_user_id
- stage_name
- legal_name (private)
- city
- country
- bio
- genres
- status
- representation_status
- booking_status
- created_at
- updated_at

### artist_links
- artist_id
- type (`spotify`, `soundcloud`, `instagram`, `tiktok`, `youtube`, `website`, `other`)
- url

### artist_assets
- artist_id
- asset_type (`press_photo`, `logo`, `epk`, `live_video`, `other`)
- storage_path
- title
- visibility

### tracks
- id
- artist_id
- title
- genre
- subgenre
- release_status
- planned_release_date
- audio_path_or_url
- artwork_path
- created_at

### releases
- id
- artist_id
- title
- release_type
- status
- release_date
- label_name
- notes

### assessments
Versioned AU·RA assessments.

Fields:
- id
- artist_id
- assessment_version
- overall_readiness
- music_readiness
- release_readiness
- brand_readiness
- audience_readiness
- live_readiness
- professional_setup
- momentum
- strengths_json
- gaps_json
- rationale_json
- generated_at
- generated_by (`ai`, `manager`, `hybrid`)

### next_moves
- id
- artist_id
- title
- description
- category
- priority
- status
- due_date
- source (`ai`, `manager`)

### representation_applications
- id
- artist_id
- organization_id
- status (`submitted`, `watch`, `development`, `review`, `declined`, `candidate`, `signed`)
- submitted_at
- manager_notes

## Agency CRM

### companies
Industry organizations.

Fields:
- id
- organization_id
- name
- company_type (`label`, `booking_agency`, `promoter`, `venue`, `media`, `partner`, `other`)
- genres
- website
- notes

### contacts
Private industry contacts.

Fields:
- id
- organization_id
- company_id
- name
- role
- email
- phone
- socials
- relationship_strength
- relationship_owner_user_id
- private_notes

### interactions
- id
- organization_id
- contact_id
- artist_id (nullable)
- release_id (nullable)
- interaction_type
- summary
- occurred_at
- next_follow_up_at

## Opportunities

### opportunities
- id
- organization_id
- type (`label`, `booking`, `showcase`, `collaboration`, `media`, `development`, `other`)
- title
- company_id
- contact_id
- status
- description
- requirements_json
- deadline
- owner_user_id

### artist_opportunity_matches
- opportunity_id
- artist_id
- fit_score
- rationale
- status (`suggested`, `approved`, `declined`, `actioned`)

## Release pitching

### release_targets
Connects a release to a company/contact target.

Fields:
- id
- release_id
- company_id
- contact_id
- fit_score
- relationship_context
- status (`research`, `approved`, `pitched`, `follow_up`, `interest`, `declined`, `negotiating`, `signed`)
- last_action_at
- next_action_at
- private_notes

## Tasks

### tasks
- id
- organization_id
- artist_id (nullable)
- release_id (nullable)
- contact_id (nullable)
- opportunity_id (nullable)
- assigned_to_user_id
- title
- description
- priority
- status
- due_at

## AI auditability

### ai_runs
Store enough metadata to understand/reproduce model-assisted outputs.

Fields:
- id
- organization_id (nullable)
- artist_id (nullable)
- run_type
- model
- prompt_version
- input_snapshot_json
- output_json
- created_at

## Permission notes

- Industry contacts and relationship history are always agency-private by default.
- Artists cannot query CRM contacts directly.
- Assessment output should have separate artist-facing and manager-facing fields where needed.
- Multi-tenant tables require Row Level Security scoped to organization membership.
- Representation decisions cannot be made automatically by AI.
