import { useAuthContext } from "../hooks/useAuthContext"

import { useState } from "react"

// firebase imports
import { auth } from "../firebase/config"
import { signOut } from "firebase/auth"

export const useLogout = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const logout = () => {
        setError(null)
        setIsPending(true)

        signOut(auth)
            .then(() => {
                dispatch({ type: 'LOGOUT' })

                setIsPending(false)
                setError(null)
            })
            .catch((err) => {
                console.log(err.message)
                setError(err.message)
                setIsPending(false)
            })
    }

    return { logout, error, isPending }
}