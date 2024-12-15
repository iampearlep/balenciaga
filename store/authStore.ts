import { create } from 'zustand';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import  {auth} from '@/firebase'
import type { AuthState } from '@/types/auth'; 

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    logOut: async () => {
        try {
            await signOut(auth)
            sessionStorage.removeItem('user')
            set({user:null})
        } catch (error) {
            console.error('Error signing out', error)
        }
    },
   initialize: () => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        set({user: currentUser})
    })
    return unsubscribe
   }
}))
