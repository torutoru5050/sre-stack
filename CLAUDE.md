# SRE Affiliate Blog

## Project Overview
DevOps/SRE向けSaaSアフィリエイトブログ。月$1,000達成が目標。

## Tech Stack
- Next.js 14 (App Router) + TypeScript + Tailwind CSS
- MDX files in `/content/posts/`
- Vercel deployment
- n8n automation via POST `/api/posts`

## Directory Structure
```
content/posts/     — MDX blog posts (frontmatter + content)
src/app/           — Next.js App Router pages
src/components/    — React components (Header, Footer, PostCard, AffiliateCTA, MDXContent)
src/lib/posts.ts   — Post loading/parsing utilities
src/app/api/posts/ — n8n webhook endpoint
```

## Key Patterns
- Posts are `.mdx` files with gray-matter frontmatter
- `<AffiliateCTA>` component for affiliate links (name, url, description, cta)
- API endpoint requires `POSTS_API_KEY` bearer token
- Dark theme with green accent (Tailwind)

## Commands
- `npm run dev` — dev server
- `npm run build` — production build
- `npm run lint` — ESLint

## Content Guidelines
- AI generates article body → human adds 10-15 lines of personal SRE experience → publish
- Posts include `{/* TODO: Add your personal experience here */}` placeholders
- Affiliate links use `rel="noopener noreferrer nofollow"`
