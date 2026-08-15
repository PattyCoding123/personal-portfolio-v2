import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";

import { env } from "@/env.mjs";

/**
 * Image URL builder only needs projectId/dataset, not an authenticated
 * client — safe to import from client components.
 */
const builder = createImageUrlBuilder({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
});

export const urlFor = (source: SanityImageSource) => builder.image(source);
