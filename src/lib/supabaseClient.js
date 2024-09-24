import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://rpvvmswakeibrgversiy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwdnZtc3dha2VpYnJndmVyc2l5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTExODEzNzYsImV4cCI6MjAyNjc1NzM3Nn0.OSqBuzQe9ASUFfVIEYlGVRk_3wtEUx1TBD3UHaXVDoc';

export const supabase = createClient(supabaseUrl, supabaseKey);