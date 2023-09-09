import { useState } from "react";

// firebase imports
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export function useSignup() {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    const signup = (email, password, displayName) => {
        setError(null)
        createUserWithEmailAndPassword(auth, email, password, displayName)
            .then((res) => {
                console.log('user signed up', res.user)
            })
            .catch((err) => {
                setError(err.message)
            })

    }

    return { error, signup }
}
