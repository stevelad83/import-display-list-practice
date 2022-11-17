const SUPABASE_URL = 'https://yhtqjrmxupxpmxmjrqpo.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlodHFqcm14dXB4cG14bWpycXBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgyNTQsImV4cCI6MTk4MzY4NDI1NH0.Bp6AKfoL4GrrPbg0WYAwHMhKSaKZFGfEYwaewQNhY4M';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function fetchMovies() {
    const response = await client.from('movies').select('*');
    return response.data;
}
