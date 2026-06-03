import './signup.scss'
import { useState } from 'react'
import { supabase } from './supabase'
import Warning from './assets/appComponents/Warning';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (password !== confirm) {
            setError('Passwords do not match');
            return;
        }

        if (password.length < 12) {
            setError('Password must be at least 12 characters');
            return;
        }

        const { error } = await supabase.auth.signUp({ email, password });
        if (error) setError(error.message);
        else setSuccess(true);
    };

    const signInWithGoogle = () => supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: window.location.origin }
    });

    const signInWithGithub = () => supabase.auth.signInWithOAuth({
        provider: 'github',
        options: { redirectTo: window.location.origin }
    });

    if (success) return (
        <div className='sign-body'>
            <div className='sign-container'>
                <p>Check your email to confirm your account.</p>
            </div>
        </div>
    );

    return (
        <div className='sign-body'>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap" rel="stylesheet" />

            <div className='sign-container'>
                <form onSubmit={handleSignup}>
                    <p>Welcome</p>

                    <input
                        type="email"
                        placeholder='Email'
                        autoComplete='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    /><br />

                    <input
                        type="password"
                        placeholder='Password'
                        autoComplete='new-password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    /><br />

                    <input
                        type="password"
                        placeholder='Confirm Password'
                        autoComplete='new-password'
                        value={confirm}
                        onChange={e => setConfirm(e.target.value)}
                    /><br />

                    {error && <Warning WarningMessage={error}/>}

                    <input type="submit" value="Sign Up" className='submit'/><br />

                    <div className='social'>
                        <div onClick={signInWithGoogle}>Google</div>
                        <div onClick={signInWithGithub}>Github</div>
                    </div>
                </form>

                <div className='drops'>
                    <div className="drop drop-1"></div>
                    <div className="drop drop-2"></div>
                    <div className="drop drop-3"></div>
                    <div className="drop drop-4"></div>
                    <div className="drop drop-5"></div>
                </div>
            </div>
        </div>
    )
}