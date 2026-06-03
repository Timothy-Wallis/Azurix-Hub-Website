import './login.css'
import { useState } from 'react';

import { supabase } from './supabase'
import Warning from './assets/appComponents/Warning.tsx'

const OAuthLogin = () => {
    const signInWithGoogle = () => supabase.auth.signInWithOAuth({ provider: "google", options: { redirectTo: window.location.origin } });
    const signInWithGithub = () => supabase.auth.signInWithOAuth({ provider: "github", options: { redirectTo: window.location.origin } });

    return (
        <div className='social'>
            <div className="go" onClick={signInWithGoogle}>Google</div>
            <div className='git' onClick={signInWithGithub}>Github</div>
        </div>
    )
}
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault(); // stops page refresh
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) setError(error.message);
    };
    return (
        <div>
            <div className='background'>
                <div className='shape'></div>
                <div className='shape'></div>
            </div>
            <form onSubmit={handleLogin}>
                <h3>Login</h3>

                <label htmlFor='username'>Username</label>
                <input type='text' placeholder='Email' id="username" autoComplete="username" value={email}
                onChange={e=>setEmail(e.target.value)}/>

                <label htmlFor='password'>Password</label>
                <input type="password" placeholder='Password' id="password" autoComplete='current-password' value={password}
                    onChange={e=>setPassword(e.target.value)}/>
                {error && <Warning WarningMessage={error}/>}
                <button type="submit">Log in</button>
                <OAuthLogin />
            </form>
        </div>
    )
}