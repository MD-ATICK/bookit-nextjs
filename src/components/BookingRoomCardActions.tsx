"use client"
import { cancelBooking } from "@/lib/actions/cancelBooking";
import Link from "next/link";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "sonner";
import { Button } from "./ui/button";


export default function BookingRoomCardActions({ roomId, bookingId }: { roomId: string, bookingId: string }) {

    const [isLoading, setIsLoading] = useState(false);

    const handleDelete = async () => {
        setIsLoading(true)
        const data = await cancelBooking(bookingId)
        if (data.success) {
            toast('Booking Cancel successfully', { style: { backgroundColor: 'green' } })
        }
        if (data.error) {
            toast(data.error, { style: { backgroundColor: 'red' } })
        }
        setIsLoading(false)

    }

    return (
        <div className='flex items-center justify-start gap-x-2'>
            <Link href={`/rooms/${roomId}`} className=''>
                <Button>
                    View
                </Button>
            </Link>
            <Button onClick={handleDelete} variant={'destructive'}>
                {
                    isLoading ?
                        <ClipLoader color="white" size={20} />
                        :
                        'Cancel Booking'
                }
            </Button>
        </div>
    )
}
