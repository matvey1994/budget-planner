import { useState } from "react";

// firebase imports
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export function useSignup() {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    const signup = (email, password, displayName) => {
        setError(null)
        setIsPending(true)

        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                if(res.user) {
                    updateProfile(res.user, { displayName });
                } else {
                    throw new Error('Could not complete signup');
                }
            })
            .catch((err) => {
                setError(err.message)
                setIsPending(false)
            })

    }
    return { error, isPending, signup }
}
