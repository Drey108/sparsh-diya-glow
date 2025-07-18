
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://dzqxmaykrtymhtfiieoj.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6cXhtYXlrcnR5bWh0ZmlpZW9qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0MjgyNDUsImV4cCI6MjA2NjAwNDI0NX0.gnZpJhsHgTvJ4OE2FRo-WolThTOE0yBun3qHFYUWtJs';

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
