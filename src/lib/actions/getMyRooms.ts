"use server"

import { cookies } from 'next/headers'
import { redirect } from "next/navigation"
import { Query } from "node-appwrite"
import { createSessionClient } from "../server/appwrite"


export const getMyRooms = async () => {

    const session = cookies().get('appwrite-session')
    if (!session) {
        redirect("/login")
    }

    try {

        const { databases, account } = await createSessionClient(session.value)

        const user = await account.get()


        const { documents: myRooms } = await databases.listDocuments(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE!,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS!,
            [Query.equal('user_id', user.$id)]
        )

        return myRooms;
    } catch (error) {
        console.log(error)
        redirect('/error')
    }
}