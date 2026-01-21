import { createClient } from '@supabase/supabase-js';

// Colocando as chaves direto aqui para não ter erro de leitura
const supabaseUrl = 'https://zdtzzqdglhhglqwhcyxf.supabase.co';
const supabaseAnonKey = 'sb_publishable_TvNBzulwvEmXhKOvblT1lQ_tSbrzrEm';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);