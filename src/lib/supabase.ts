import { createClient } from "@supabase/supabase-js";

const data = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log("klkk", data);

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
);
