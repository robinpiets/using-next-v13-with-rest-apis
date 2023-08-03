This is an assignment by Robin Piets. The goal was to use Next.js version 13 to with swr to create an app that can add, edit and delete tags on a real API.

Note: I used a build-your-own-API-service that removes itself after 30 days of inactivity, so that needs a new setup when trying to run this app.

## Getting Started

Requirements:

- Node.js v16 (or higher)

Install deps:

```bash
  yarn
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tests

Run the tests:

```bash
yarn test
```

The test files:

- src/lib/components/Tags/TagForm.test.tsx
- src/lib/components/Tags/TagList.test.tsx

## Learn More

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
