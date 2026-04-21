# Angel Birthday Interactive Site

A modular, response-driven birthday experience built with:

- Next.js App Router + TypeScript
- Tailwind CSS v4
- Motion (Framer Motion runtime package `motion`)
- Lenis smooth scrolling
- shadcn/ui style components
- Lucide icons

## Run locally

```bash
npm install
npm run dev
```

## Modular structure

Each page lives in its own folder for easy extension:

- `components/pages/intro`
- `components/pages/vibe`
- `components/pages/gift`
- `components/pages/features`
- `components/pages/story`
- `components/pages/chat`
- `components/pages/promise`
- `components/pages/final`

Chat data is stored separately in `data/chat-messages.ts` so you can add/edit messages easily.
