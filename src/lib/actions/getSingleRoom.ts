"use server"

import { createAdminClient } from '@/lib/server/appwrite'
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export const getSingleRoom = async (id: string) => {
    try {

        const { databases } = await createAdminClient()

        const room = await databases.getDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE!,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS!,
            id
        )

        revalidatePath('/')
        return room;
    } catch (error) {
        console.log(error)
        redirect('/error')
    }
}