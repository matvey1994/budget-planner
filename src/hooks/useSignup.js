import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext"

// firebase imports
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export function useSignup() {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const signup = (email, password, displayName) => {
        console.log('Password:', password); 
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
                console.error(err)
                setError(err.message)
                setIsPending(false)
            });
    }
    return { error, isPending, signup }
}
