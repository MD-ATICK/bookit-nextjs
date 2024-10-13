"use server"

import { cookies } from "next/headers"
import { createSessionClient } from "../server/appwrite"


export const checkAuth = async () => {
    const session = cookies().get('appwrite-session')

    if (!session) return { isAuthenticated: false }

    try {

        const { account } = await createSessionClient(session.value)

        const user = await account.get()

        return {
            isAuthenticated: true,
            user: {
                id: user.$id,
                name: user.name,
                email: user.email,
                labels: user.labels
            }
        }

    } catch (error) {
        console.log((error as Error).message)
        return { isAuthenticated: false, error: 'Error deleting Session!' }
    }
}