import { createClient } from "@supabase/supabase-js";
import * as SentryNode from "@sentry/node";

// Setup for APIs: instantiate Supabase by creating a
// client specifying DB URL and ANON key
export const supabase = createClient(
	process.env.DATABASE_URL,
	process.env.SUPABASE_ANON_KEY
);

// Initialize Sentry for server-side
SentryNode.init({
	dsn: process.env.SENTRY_DSN,
	tracesSampleRate: 1,
	enableLogs: true,
	sendDefaultPii: true,
	profilesSampleRate: 1.0,
	tracePropagationTargets: [
		"localhost",
		/^https:\/\/mmeletricarservice\.it\/api/,
	],
});

export { SentryNode };
