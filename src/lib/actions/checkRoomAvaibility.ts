"use server"

import { DateTime } from 'luxon'
import { cookies } from 'next/headers'
import { redirect } from "next/navigation"
import { Query } from 'node-appwrite'
import { createSessionClient } from "../server/appwrite"


const toUTCDateTime = (dateString: string) => {
    return DateTime.fromISO(dateString, { zone: 'utc' }).toUTC().toFormat('yyyy-MM-dd HH:mm:ss');;
}

const dateRangesOverLap = (checkInA: string, checkOutA: string, checkInB: string, checkOutB: string) => {
    const newCheckInA = new Date(checkInA).getTime()
    const newCheckOutB = new Date(checkOutB).getTime()
    const newCheckOutA = new Date(checkOutA).getTime()
    const newCheckInB = new Date(checkInB).getTime()
    return newCheckInA < newCheckOutB && newCheckOutA > newCheckInB;
}
export const checkRoomAvailability = async (roomId: string, checkIn: string, checkOut: string) => {


    const nowCheckInDateTime = toUTCDateTime(checkIn)
    const nowCheckOutDateTime = toUTCDateTime(checkOut)

    const session = cookies().get('appwrite-session')
    if (!session) {
        redirect("/login")
    }
    try {

        const { databases } = await createSessionClient(session.value)

        const { documents: bookings } = await databases.listDocuments(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE!,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS!,
            [Query.equal('room_id', roomId)]
        )

        for (const booking of bookings) {
            const bookingCheckInDateTime = toUTCDateTime(booking.check_in)
            const bookingCheckOutDateTime = toUTCDateTime(booking.check_out)

            if (dateRangesOverLap(nowCheckInDateTime, nowCheckOutDateTime, bookingCheckInDateTime, bookingCheckOutDateTime)) {
                return false
            }
        }

        return true;
    } catch (error) {
        console.log(error)
        return { error: "something held wrong to check room availability!" }
    }
}