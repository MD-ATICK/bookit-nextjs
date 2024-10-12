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
            <div className=' flex items-start w-full gap-x-4'>
                {/* IMAGE */}
                <div className=" relative h-40 rounded-lg overflow-hidden aspect-square shadow-lg">
                    <Image src={roomImage} placeholder='blur' fill sizes="300px" alt={description} />
                </div>
                {/* ROOM DETAILS */}
                <div className=' flex  w-2/3 py-1  flex-col text-xs md:text-sm gap-1'>
                    <h2 className=' font-semibold text-xl md:text-2xl'>{name}</h2>
                    <p className=' text-gray-400 hidden md:block'>Description : {description}</p>
                    <p className=' text-gray-400'>Address : {address}</p>
                    <p className=' text-gray-400'>Price : {`${price_per_hour}/hour`}</p>
                    <Button className=' block sm:hidden mt-2'>
                        <Link href={`/${id}`} className=' h-full w-full'>
                            View Room
                        </Link>
                    </Button>
                </div>
            </div>
            {/* RIGHT SIDE */}
            <Button className=' hidden sm:block'>
                <Link href={`/rooms/${id}`} className=' h-full w-full'>
                    View Room
                </Link>
            </Button>
        </div>
    )
}
