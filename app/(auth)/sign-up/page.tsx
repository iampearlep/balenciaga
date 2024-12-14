'use client'

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword, AuthError } from 'firebase/auth';
import { auth } from '@/firebase';

const SignUp = () => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
  
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        
        // Basic password strength check
        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }

        try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          )
          const user = userCredential.user
          
          // More secure way to store user info (optional)
          sessionStorage.setItem(
            'user',
            JSON.stringify({
             userName,
             email: user.email,
             uid: user.uid
            })
          )
          
          setUserName("")
          setEmail("")
          setPassword("")
          router.push('/');
        } catch (err) {
          if (err instanceof Error) {
            switch ((err as AuthError).code) {
              case 'auth/email-already-in-use':
                setError('Email is already registered');
                break;
              case 'auth/invalid-email':
                setError('Invalid email address');
                break;
              case 'auth/weak-password':
                setError('Password is too weak');
                break;
              default:
                setError('An error occurred during sign up');
            }
          }
        }
    };

  return (
    <div className="w-10/12 md:max-w-md mx-auto my-20">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block mb-2">Username</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
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
          Sign Up
        </button>
      </form>
      <div className='flex justify-center items-center py-4 text-sm'>
        <p>Already have an account? <Link className='hover:underline' href="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default SignUp;