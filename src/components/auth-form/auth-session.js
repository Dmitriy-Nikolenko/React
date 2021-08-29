import { useEffect, useState } from "react"
import { firebaseApp } from "../api/firebase"

export function AuthSession() {
    const [session, setSession] = useState(null)
useEffect(() => {
            firebaseApp.auth().onAuthStateChanged((user) => {
                if (user) {
                    
                    setSession(user)
                    return
                }
                setSession(null)
            })
        },[])

    return (
        session
    )


}