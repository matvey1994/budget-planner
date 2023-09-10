import { useState } from "react";

// firebase imports
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    const login = (email, password) => {
        setError(null)
        setIsPending(true)

        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log('user logged in', res.user)
            })
            .then(() => {
                setIsPending(false)
            })
            .catch((err) => {
                setError(err.message)
                setIsPending(false)
            })

    }
    return { error, isPending, login }
}