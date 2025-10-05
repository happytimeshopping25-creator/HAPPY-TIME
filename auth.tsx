import React, { useEffect, useState } from 'react'; import { supabase } from './supabaseClient';
export function useSession(){ const [session,setSession]=useState<any>(null); useEffect(()=>{ supabase.auth.getSession().then(({data})=>setSession(data.session)); const { data: sub } = supabase.auth.onAuthStateChange((_e,s)=>setSession(s)); return ()=>{ sub.subscription.unsubscribe(); }; },[]); return session; }
export function RequireRole({ children, roles }: { children: React.ReactNode; roles: string[] }) {
  const session = useSession(); const [ok,setOk]=useState(false);
  useEffect(()=>{ (async()=>{ if(!session) return setOk(false); const email=session.user?.email; if(!email) return setOk(false); const { data } = await supabase.from('admin_users').select('role').eq('email', email).maybeSingle(); setOk(!!data && roles.includes(data.role)); })(); },[session]);
  if(!session) return <div><p>Please sign in.</p><AuthForm /></div>;
  if(!ok) return <div><p>You are signed in but do not have permission.</p></div>;
  return <>{children}</>;
}
export function AuthForm(){ const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); async function signIn(e:any){ e.preventDefault(); const { error } = await supabase.auth.signInWithPassword({ email, password }); if(error) alert(error.message); } async function signUp(){ const { error } = await supabase.auth.signUp({ email, password }); if(error) alert(error.message); else alert('Signed up. Ask owner to assign your role.'); } return (<form onSubmit={signIn} style={{ display:'grid', gap:8, maxWidth:320 }}><input placeholder="email" value={email} onChange={e=>setEmail(e.target.value)} /><input placeholder="password" type="password" value={password} onChange={e=>setPassword(e.target.value)} /><button type="submit">Sign in</button><button onClick={signUp} type="button">Sign up</button></form>); }
