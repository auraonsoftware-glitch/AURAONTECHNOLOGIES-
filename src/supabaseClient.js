import { createClient } from '@supabase/supabase-js'

const getEnv = () => {
	// prefer Vite's import.meta.env when available, otherwise fall back to process.env
	const meta = typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env : {}
	const url = meta.VITE_SUPABASE_URL || process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL
	const key = meta.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY
	return { url, key }
}

const { url: supabaseUrl, key: supabaseAnonKey } = getEnv()

if (!supabaseUrl || !supabaseAnonKey) {
	console.error('Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY. Check your environment variables.')
} else if (!supabaseUrl.includes('.supabase.co')) {
	console.warn('VITE_SUPABASE_URL does not look like a Supabase project URL:', supabaseUrl)
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// helper: quick runtime check (works in node when process.env is set)
export async function checkSupabase() {
	if (!supabaseUrl || !supabaseAnonKey) return { ok: false, error: 'missing_env' }
	try {
		const res = await supabase.from('applicants').select('id').limit(1)
		if (res.error) return { ok: false, error: res.error }
		return { ok: true, rows: res.data }
	} catch (err) {
		return { ok: false, error: err }
	}
}
