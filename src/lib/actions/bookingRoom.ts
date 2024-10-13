"use server"

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from "next/navigation"
import { ID } from 'node-appwrite'
import { createSessionClient } from "../server/appwrite"
import { checkRoomAvailability } from './checkRoomAvaibility'


// note : all creation make my method but this is made in formData method. don't be confused.

export const bookingRoom = async (formData: FormData) => {


    const session = cookies().get('appwrite-session')
    if (!session) {
        redirect("/login")
    }

    
    
    const checkInTime = formData.get('check_in_time')
    const checkOutTime = formData.get('check_out_time')
    const checkInDate = formData.get('check_in_date')
    const checkOutDate = formData.get('check_out_date')
    const roomId = formData.get('room_id') as string;
    
    
    const checkInDateTime = `${checkInDate}T${checkInTime}`;
    const checkOutDateTime = `${checkOutDate}T${checkOutTime}`;
    
    const isAvailable = await checkRoomAvailability(roomId, checkInDateTime, checkOutDateTime);

    if(!isAvailable){
        return { error: 'The room is not available for the selected dates.' }
    }


    try {

        const { account, databases } = await createSessionClient(session.value)
        const user = await account.get()
        if (!user) {
            return { error: 'you must be logged in to book a room' }
        }

        const bookingData = {
            check_in: checkInDateTime,
            check_out: checkOutDateTime,
            user_id: user.$id,
            room_id: roomId,
        }

        await databases.createDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE!,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS!,
            ID.unique(),
            bookingData
        )

        revalidatePath('/bookings', 'layout')

        return { success: true }

    } catch (error) {
        console.log(error)
        return { error: 'an error occurred while trying to book a room' }
    }
}