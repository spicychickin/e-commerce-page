// src/supabaseClient.js

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uoxcokzsbfxyvlacspxe.supabase.co'; // from Supabase dashboard
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVveGNva3pzYmZ4eXZsYWNzcHhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI0OTc4MzEsImV4cCI6MjA2ODA3MzgzMX0.kc7nyIQdQiwpXQv9xVqYg2nG1mWDWTgRS6hb2ltyyFk'; // from Supabase dashboard
export const supabase = createClient(supabaseUrl, supabaseKey);