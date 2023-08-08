import { createClient } from "@supabase/supabase-js";
// import dotenv from 'dotenv';
// dotenv.config();
const supabaseUrl = 'https://gnpajqyxlpjpfoawzdaw.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImducGFqcXl4bHBqcGZvYXd6ZGF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE0NDYwMTQsImV4cCI6MjAwNzAyMjAxNH0.r8WxwZmew3Glc5OsvIu9sE2JYa0eTW-mDpR7PiS_K-4";

export const supabase = createClient(supabaseUrl, supabaseKey);