"use server"

import { cookies } from 'next/headers'
import { redirect } from "next/navigation"
import { Query } from "node-appwrite"
import { createSessionClient } from "../server/appwrite"


export const getMyBookings = async () => {

    const session = cookies().get('appwrite-session')
    if (!session) {
        redirect("/login")
    }

    try {

        const { databases, account } = await createSessionClient(session.value)

        const user = await account.get()

        if (!user) {
            return { error: 'you must be logged in to view bookings!' }
        }

        const { documents: myBookings } = await databases.listDocuments(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE!,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS!,
            [Query.equal('user_id', user.$id)]
        )

        return {myBookings};
    } catch (error) {
        console.log(error)
       return { error : 'failed to fetch bookings!'}
    }
}