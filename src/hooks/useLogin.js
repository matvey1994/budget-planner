import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext"

// firebase imports
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

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
                setError(err.message)
                setIsPending(false)
            })

    }
    return { error, isPending, login }
}