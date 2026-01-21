import { createClient } from '@supabase/supabase-js';

// Esta linha diz: "Procure a URL nas variáveis de ambiente, se não achar, use vazio"
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Erro: As chaves do Supabase não foram encontradas nas variáveis de ambiente.");
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');