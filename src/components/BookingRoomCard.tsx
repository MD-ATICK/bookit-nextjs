import Image from 'next/image'
import { Models } from 'node-appwrite'
import BookingRoomCardActions from './BookingRoomCardActions'

interface props {
    booking: Models.Document
}

export default function BookingRoomCard({ booking }: props) {

    const { description, image, name, $id } = booking.room_id
    const bucketID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_STORAGE_BUCKET_ROOMS!
    const projectID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT!
    const endPoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!

    const imageUrl = `${endPoint}/storage/buckets/${bucketID}/files/${image}/view?project=${projectID}`


    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        const month = date.toLocaleString('en-Us', { month: 'short' })
        const day = date.getUTCDate()


        const time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true, timeZone: 'UTC' })
        return `${month} ${day} at ${time}`
    }

    return (
        <div className=" flex items-center hover:bg-[#0d0d0d] flex-col sm:flex-row gap-x-2  rounded-xl pr-[2vw] justify-between ">
            {/* LEFT SIDE */}
            <div className=' flex items-start  h-40 w-full gap-x-4'>
                {/* IMAGE */}
                <div className=" relative h-full aspect-[3/2] rounded-lg overflow-hidden shadow-lg">
                    <Image src={imageUrl ?? '/src/assets/calendar.png'} fill sizes="200px" alt={description} />
                </div>
                {/* ROOM DETAILS */}
                <div className='flex flex-col  w-full justify-between h-full'>
                    <div className=' flex  w-2/3 py-1  flex-col text-xs md:text-sm gap-1'>
                        <h2 className=' font-semibold text-xl md:text-2xl'>{name}</h2>
                        <p className=' text-gray-400 hidden md:block'>{description}</p>
                        <br />
                        <p className=' font-medium'>Check In : {formatDate(booking.check_in)}</p>
                        <p className=' font-medium'>Check Out : {formatDate(booking.check_out)}</p>
                    </div>
                    <div className=' md:hidden'>
                        <BookingRoomCardActions roomId={$id } bookingId={booking.$id} />
                    </div>

                </div>
            </div>
            {/* RIGHT SIDE */}
            <div className=' hidden md:block'>
            <BookingRoomCardActions roomId={$id } bookingId={booking.$id} />
            </div>
        </div>
    )
}
