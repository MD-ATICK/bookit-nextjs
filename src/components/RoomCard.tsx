import roomImage from '@/assets/room-1.jpg'
import { room } from "@/types/type"
import Image from "next/image"
import Link from 'next/link'
import { Button } from './ui/button'

interface props {
    room: room
}

export default function RoomCard({ room }: props) {

    const { description, address, id, price_per_hour, name } = room

    return (
        <div className=" flex items-center hover:bg-[#151515] flex-col sm:flex-row gap-x-2  rounded-xl pr-[2vw] justify-between ">
            {/* LEFT SIDE */}
            <div className=' flex items-start gap-x-4'>
                {/* IMAGE */}
                <div className=" relative h-40 rounded-lg shadow-lg overflow-hidden aspect-square border">
                    <Image src={roomImage} fill sizes="300px" alt={description} />
                </div>
                {/* ROOM DETAILS */}
                <div className=' flex w-2/3  flex-col text-xs sm:text-sm gap-1'>
                    <h2 className=' font-semibold text-2xl'>{name}</h2>
                    <p className=' text-gray-400'>Description : {description}</p>
                    <p className=' text-gray-400'>Address : {address}</p>
                    <p className=' text-gray-400'>Price : {`${price_per_hour}/hour`}</p>
                    <Button className=' block sm:hidden mt-2'>
                        <Link href={`/${id}`}>
                            View Room
                        </Link>
                    </Button>
                </div>
            </div>
            {/* RIGHT SIDE */}
            <Button className=' hidden sm:block'>
                <Link href={`/${id}`}>
                    View Room
                </Link>
            </Button>
        </div>
    )
}
