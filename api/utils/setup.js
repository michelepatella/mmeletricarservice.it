import { createClient } from "@supabase/supabase-js";

// Setup for APIs: instantiate Supabase by creating a
// client specifying DB URL and ANON key
export const supabase = createClient(
	process.env.DATABASE_URL,
	process.env.SUPABASE_ANON_KEY
);
