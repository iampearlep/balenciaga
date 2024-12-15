import {User as FirebaseUser} from 'firebase/auth'
export type AuthState = {
user: FirebaseUser | null,
logOut: () => Promise<void>,
initialize: () => () => void
}