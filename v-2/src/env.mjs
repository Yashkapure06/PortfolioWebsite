import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    SITE_URL: z.string().url().optional(),
    GOOGLE_SITE_VERIFICATION_ID: z.string().min(1).optional(),
    RESEND_API_KEY: z.string().min(1).optional(),
  },
  client: {
    NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID: z.string().min(1),
    NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID: z.string().min(1),
    NEXT_PUBLIC_MICROSOFT_CLARITY_ID: z.string().min(1),
  },
  runtimeEnv: {
    SITE_URL: process.env.SITE_URL,
    GOOGLE_SITE_VERIFICATION_ID: process.env.GOOGLE_SITE_VERIFICATION_ID,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID:
      process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID,
    NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID:
      process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID,
    NEXT_PUBLIC_MICROSOFT_CLARITY_ID:
      process.env.NEXT_PUBLIC_MICROSOFT_CLARITY_ID,
  },
});
