'use client'

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword, AuthError, signInWithPopup, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '@/firebase';
import { IoLogoGithub, IoLogoGoogle } from 'react-icons/io';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = userCredential.user;

            sessionStorage.setItem(
                'user',
                JSON.stringify({
                    email: user.email,
                    uid: user.uid
                })
            );

            setEmail('');
            setPassword('');
            router.push('/');
        } catch (err) {
            if (err instanceof Error) {
                switch ((err as AuthError).code) {
                    case 'auth/user-not-found':
                        setError('No user found with this email');
                        break;
                    case 'auth/wrong-password':
                        setError('Incorrect password');
                        break;
                    case 'auth/invalid-email':
                        setError('Invalid email address');
                        break;
                    case 'auth/too-many-requests':
                        setError('Too many login attempts. Please try again later.');
                        break;
                    default:
                        setError('An error occurred during login');
                }
            }
        }
    };

      const handleGoogleLogin = async () => {
        const googleProvider = new GoogleAuthProvider();
        
        try {
            const userCredential = await signInWithPopup(auth, googleProvider);
            const user = userCredential.user;

            sessionStorage.setItem(
                'user',
                JSON.stringify({
                    email: user.email,
                    name: user.displayName,
                    uid: user.uid,
                    provider: 'google'
                })
            );

            router.push('/');
        } catch (err) {
            if (err instanceof Error) {
                setError('Google login failed');
                console.error(err);
            }
        }
    };

   
    const handleGitHubLogin = async () => {
        const githubProvider = new GithubAuthProvider();
        
        try {
            const userCredential = await signInWithPopup(auth, githubProvider);
            const user = userCredential.user;

            sessionStorage.setItem(
                'user',
                JSON.stringify({
                    email: user.email,
                    name: user.displayName,
                    uid: user.uid,
                    provider: 'github'
                })
            );

            router.push('/');
        } catch (err) {
            if (err instanceof Error) {
                setError('GitHub login failed');
                console.error(err);
            }
        }
    };

  return (
    <div className="w-10/12 md:max-w-md mx-auto my-20">
     <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        {error && <p className="text-red-500 text-center text-xs">{error}</p>}
        <button 
          type="submit" 
          className="w-full bg-neutral-900 text-white py-2 rounded"
        >
          Login
        </button>
      </form>
      <div className="flex flex-row justify-center items-center gap-x-4 py-5">
        <button 
         onClick={handleGitHubLogin}
          className="w-full justify-center items-center flex bg-gray-500 text-white py-2 rounded"
        >
          <IoLogoGithub className='w-4 h-4' />
        </button>
        <button 
         onClick={handleGoogleLogin}
          className="w-full flex justify-center items-center bg-blue-400 text-white py-2 rounded"
        >
          <IoLogoGoogle className='w-4 h-4' />
        </button>
      </div>
      <div className='flex justify-center items-center py-2 text-sm'>
        <p>Don't have an account? <Link className='hover:underline' href="/sign-up">Sign Up</Link></p>
      </div>
    </div>
  );
}

export default Login;