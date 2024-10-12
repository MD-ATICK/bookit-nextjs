"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { createAdminClient } from "../lib/server/appwrite"


export const getAllRooms = async () => {
    try {

        const { databases } = await createAdminClient()

        const { documents } = await databases.listDocuments(
            process.env.NEXT_PUBLIC_APP_WRITE_DATABASE!,
            process.env.NEXT_PUBLIC_APP_WRITE_COLLECTION_ROOMS!
        )

        revalidatePath('/')
        console.log('rooms', documents.length)
        return [];
    } catch (error) {
        console.log(error)
        redirect('/error')
    }
}