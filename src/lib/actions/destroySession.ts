"use server"

import { cookies } from "next/headers"
import { createSessionClient } from "../server/appwrite"

export const destroySession = async () => {

    const session = cookies().get('appwrite-session')

    if(!session){
        return { error: 'No active session found!' }
    }
    
    try {

        const { account } = await createSessionClient(session.value)
        await account.deleteSession('current')

        cookies().delete('appwrite-session')

        return { success: true }

    } catch (error) {
        console.log((error as Error).message)
        return { error: 'Error deleting Session!' }
    }
}