import { createClient } from "@supabase/supabase-js";
import * as SentryNode from "@sentry/node";

// Initialize Supabase client
export const supabase = createClient(
	process.env.DATABASE_URL,
	process.env.SUPABASE_ANON_KEY
);

// Setup Sentry for error tracking in
// serverless functions
SentryNode.init({
	dsn: process.env.SENTRY_DSN,
	enableLogs: true,
	sendDefaultPii: false,
});

export { SentryNode };
