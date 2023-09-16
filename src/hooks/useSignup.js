import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext"

// firebase imports
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export function useSignup() {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const getCustomErrorMessage = (errorCode) => {
        switch (errorCode) {
            case 'auth/email-already-in-use':
                return 'This email is already registered. Try logging in.';
            case 'auth/invalid-email':
                return 'Please enter a valid email address.';
            case 'auth/operation-not-allowed':
                return 'Email and Password authentication is not enabled. Contact support.';
            case 'auth/weak-password':
                return 'Your password is too weak. Please choose a stronger password.';
            default:
                return 'An unknown error occured. Please try again later.'
        }
    }

    const signup = (email, password, displayName) => {
        setError(null)
        setIsPending(true)

        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                if(res.user) {
                    return updateProfile(res.user, { displayName })
                        .then(() => {
                            setIsPending(false);
                            dispatch({ type: 'LOGIN', payload: res.user });
                        });
                } else {
                    throw new Error('Could not complete signup');
                }
            })
            .catch((err) => {
                setError(getCustomErrorMessage(err.message))
                setIsPending(false)
            });
    }
    return { error, isPending, signup }
}
