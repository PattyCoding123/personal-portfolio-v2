import { createClient, type ClientConfig } from "@sanity/client";

import { env } from "@/env.mjs";

/**
 * Public read client — no token. Safe to use in server components; the
 * `production` dataset is public, so unauthenticated reads of published
 * content work without credentials. Never add a token here — writes and
 * any authenticated reads belong in a server-only client instead.
 */
const config: ClientConfig = {
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
};

export const client = createClient(config);
