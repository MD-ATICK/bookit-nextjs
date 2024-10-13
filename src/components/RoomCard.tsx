import Image from 'next/image'
import Link from 'next/link'
import { Models } from 'node-appwrite'
import { Button } from './ui/button'

interface props {
    room: Models.Document
}

export default function RoomCard({ room }: props) {

    const { description, image, address, $id, price_per_hour, name } = room
    const bucketID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_STORAGE_BUCKET_ROOMS!
    const projectID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT!
    const endPoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!

    const imageUrl = `${endPoint}/storage/buckets/${bucketID}/files/${image}/view?project=${projectID}`

    return (
        <div className=" flex items-center hover:bg-[#0d0d0d] flex-col sm:flex-row gap-x-2  rounded-xl pr-[2vw] justify-between ">
            {/* LEFT SIDE */}
            <div className=' flex items-start w-full gap-x-4'>
                {/* IMAGE */}
                <div className=" relative h-40 rounded-lg overflow-hidden aspect-[3/2] shadow-lg">
                    <Image src={imageUrl ?? '/src/assets/calendar.png'} fill sizes="200px" alt={description} />
                </div>
                {/* ROOM DETAILS */}
                <div className=' flex w-full  sm:w-2/3 py-1  flex-col text-xs md:text-sm gap-1'>
                    <h2 className=' font-semibold text-[16px] sm:text-xl md:text-2xl'>{name}</h2>
                    <p className=' text-gray-400 hidden md:block'>Description : {description}</p>
                    <p className=' text-gray-400'>Address : {address}</p>
                    <p className=' text-gray-400'>Price : {`${price_per_hour}/hour`}</p>
                    <Button className=' block sm:hidden mt-2'>
                        <Link href={`/rooms/${$id}`} className=' h-full w-full'>
                            View Room
                        </Link>
                    </Button>
                </div>
            </div>
            {/* RIGHT SIDE */}
            <Link href={`/rooms/${$id}`} className=' hidden sm:block'>
                <Button className=''>
                    View Room
                </Button>
            </Link>
        </div>
    )
}
