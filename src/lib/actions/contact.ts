"use server";

import { createClient } from "@sanity/client";
import { z } from "zod";

import { env } from "@/env.mjs";
import { formSchema } from "@/lib/validators/form-validator";

// Reject submissions completed faster than a human plausibly could.
const MIN_SUBMIT_TIME_MS = 1500;

const contactActionSchema = formSchema.extend({
  website: z.string(), // honeypot: real users never see or fill this
  startedAt: z.number(), // client-side form-render timestamp, for the time-trap
});

type ContactActionInput = z.infer<typeof contactActionSchema>;

export type ContactActionResult =
  | { success: true }
  | { success: false; error: string };

/**
 * Write-only client, scoped to this action. Do not export this or move it
 * to a shared module — the write token must never become reachable from a
 * client component.
 */
const writeClient = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-05-03",
  useCdn: false,
  token: env.SANITY_TOKEN,
});

export async function submitContactForm(
  input: ContactActionInput
): Promise<ContactActionResult> {
  const parsed = contactActionSchema.safeParse(input);

  if (!parsed.success) {
    return {
      success: false,
      error: "Please check your input and try again.",
    };
  }

  const { name, email, message, website, startedAt } = parsed.data;

  // Bots that trip the honeypot or submit implausibly fast get a fake
  // success response so they don't learn to route around the checks.
  const isBot = website.length > 0 || Date.now() - startedAt < MIN_SUBMIT_TIME_MS;

  if (isBot) {
    return { success: true };
  }

  try {
    await writeClient.create({
      _type: "contact",
      name,
      email,
      message,
    });

    return { success: true };
  } catch {
    return {
      success: false,
      error: "Something went wrong. Please try again.",
    };
  }
}
