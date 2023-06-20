import { createClient, type ClientConfig } from "@sanity/client";
import { type SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";

import { env } from "@/env.mjs";

const config: ClientConfig = {
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
  token: env.NEXT_PUBLIC_SANITY_TOKEN,
};

export const client = createClient(config);

// Set up image URL builder for Sanity
const builder = imageUrlBuilder(client);
export const urlFor = (source: SanityImageSource) => builder.image(source);
