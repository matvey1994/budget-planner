import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext"

// firebase imports
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword, signInAnonymously } from "firebase/auth";

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const getCustomErrorMessage = (errorCode) => {
        switch (errorCode) {
          case 'auth/invalid-email':
            return 'The email address is not valid.';
          case 'auth/user-disabled':
            return 'This user account has been disabled.';
          case 'auth/user-not-found':
            return 'No user found with the provided email.';
          case 'auth/wrong-password':
            return 'The password is incorrect.';
          default:
            return 'An unknown error occurred. Please try again.';
        }
      };

    const login = (email, password) => {
        setError(null)
        setIsPending(true)

        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                dispatch({ type: 'LOGIN', payload: res.user })
            })
            .then(() => {
                setIsPending(false)
            })
            .catch((err) => {
                setError(getCustomErrorMessage(err.message))
                setIsPending(false)
            })

    }

    const loginAnonymously = () => {
        setError(null);
        setIsPending(true);

        signInAnonymously(auth)
            .then((res) => {
                dispatch({ type: 'LOGIN', payload: res.user })
            })
            .then(() => {
                setIsPending(false);
            })
            .catch((err) => {
                setError(err.message);
                setIsPending(false);
            });
    }

    return { error, isPending, login, loginAnonymously }
}