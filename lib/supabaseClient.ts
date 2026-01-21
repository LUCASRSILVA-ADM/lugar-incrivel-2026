
import { createClient } from '@supabase/supabase-js';

// As per your request, using import.meta.env
const supabaseUrl = (import.meta as any).env?.VITE_SUPABASE_URL || ' https://zdtzzqdglhhglqwhcyxf.supabase.co';
const supabaseAnonKey = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || 'sb_publishable_TvNBzulwvEmXhKOvblT1lQ_tSbrzrEm';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
