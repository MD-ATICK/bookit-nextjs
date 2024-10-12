import roomImage from '@/assets/room-1.jpg'
import { room } from '@/types/type'
import Image from 'next/image'


interface props {
    room: room
}

export default function SingleRoomDetails({ room }: props) {

    const { description, address, sqft ,capacity , availability, price_per_hour, name } = room

    return (
        <div className=' w-full flex flex-col px-[2vw] md:flex-row items-start font-medium text-sm gap-[4vw]'>
            {/*  IMAGE  */}
            <div className=' w-full md:w-1/2 relative aspect-[16/10]'>
                <Image src={roomImage} fill sizes='400px' className=' object-cover rounded-xl shadow-lg' alt={description} />
            </div>
            {/* CONTENT */}
            <div className=' flex w-full md:w-1/2 py-1  flex-col text-xs md:text-sm gap-3'>
                    <h2 className=' font-semibold mb-4 text-xl md:text-2xl'>{name}</h2>
                    <p className=' hidden md:block'>Description : {description}</p>
                    <p className=''>Address : {address}</p>
                    <p className=''>Capacity : {capacity}</p>
                    <p className=''>Size : {sqft}sq ft</p>
                    <p className=''>Availability : {availability}</p>
                    <p className=''>Price : {`$${price_per_hour}/hour`}</p>
                </div>
        </div>
    )
}
