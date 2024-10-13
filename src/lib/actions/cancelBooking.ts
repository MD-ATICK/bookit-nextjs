"use server"

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from "next/navigation"
import { createSessionClient } from "../server/appwrite"


export const cancelBooking = async (bookingId: string) => {

    const session = cookies().get('appwrite-session')
    if (!session) {
        redirect("/login")
    }

    try {

        const { databases, account } = await createSessionClient(session.value)

        const user = await account.get()

        if (!user) {
            return { error: 'User not found' }
        }

        const booking = await databases.getDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE!,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS!,
            bookingId
        )

        if (booking.user_id !== user.$id) {
            return { error: 'You can only cancel your own booking' }
        }

        await databases.deleteDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE!,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS!,
            bookingId
        )

        revalidatePath('/booking', 'layout')
        return { success: true }

    } catch (error) {
        console.log(error)
        return { error: "something held wrong to cancel booking!" }
    }
}