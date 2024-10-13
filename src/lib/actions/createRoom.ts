"use server"

import { revalidatePath } from "next/cache";
import { ID } from "node-appwrite";
import { createAdminClient } from "../server/appwrite";
import { checkAuth } from "./checkAuth";


export const createRoom = async (formData: FormData) => {

    const { databases, storage } = await createAdminClient()
    try {

        const { user } = await checkAuth()
        if (!user) return { error: 'You must be logged in to create a room!' }

        const image = formData.get('image')
        if (!image || !(image instanceof File)) {
            return { error: 'Invalid image file. Please provide a valid file.' };
        }

        const data = await storage.createFile(process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_STORAGE_BUCKET_ROOMS!, ID.unique(), image)

        await databases.createDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE!,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS!,
            ID.unique(),
            {
                name: formData.get('name'),
                description: formData.get('description'),
                address: formData.get('address'),
                location: formData.get('location'),
                availability: formData.get('availability'),
                capacity: formData.get('capacity'),
                amenities: formData.get('amenities'),
                price_per_hour: formData.get('price_per_hour'),
                sqft: formData.get('sqft'),
                image: data.$id,
                user_id: user.id
            }
        )


        revalidatePath('/')
        return { success: true }
    } catch (error) {
        console.log((error as Error).message)
        return { error: 'Error creating room!' }
    }
}