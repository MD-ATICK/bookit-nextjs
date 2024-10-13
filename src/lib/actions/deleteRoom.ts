"use server"

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { createSessionClient } from "../server/appwrite"


export const deleteRoom = async (roomId: string) => {
    const session = cookies().get('appwrite-session')

    if (!session) {
        redirect('/login')
    }

    try {

        const { account, databases } = await createSessionClient(session.value)

        const user = await account.get()
        if (!user) {
            redirect('/login')
        }

        await databases.deleteDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE!,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS!,
            roomId
        )

        revalidatePath('/my-rooms', 'layout')
        revalidatePath('/', 'layout')
        return { success: true }

    } catch (error) {
        console.log((error as Error).message)
        return { isAuthenticated: false, error: 'Error deleting room!' }
    }
}