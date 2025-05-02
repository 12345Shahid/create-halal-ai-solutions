
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hqdlqogacwovunmvgvmq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxZGxxb2dhY3dvdnVubXZndm1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0MDAyMDIsImV4cCI6MjA2MDk3NjIwMn0.fZIWLcnyr5PpWrMTF0oLfEst-lkATpA4iZ8PPUFcrWE';

export const supabase = createClient(supabaseUrl, supabaseKey);
