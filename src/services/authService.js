import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from './firebase'

export const signIn = (email, password) => {
    signInWithEmailAndPassword(auth,email,password)
}