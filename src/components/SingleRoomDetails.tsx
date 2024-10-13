import Image from 'next/image'
import { Models } from 'node-appwrite'


interface props {
    room: Models.Document
}

export default function SingleRoomDetails({ room }: props) {

    const { description, address, sqft, capacity, availability, price_per_hour, name, image } = room
    const bucketID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_STORAGE_BUCKET_ROOMS!
    const projectID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT!
    const endPoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!

    const imageUrl = `${endPoint}/storage/buckets/${bucketID}/files/${image}/view?project=${projectID}`

    return (
        <div className=' w-full flex flex-col px-[2vw] md:flex-row items-start font-medium text-sm gap-[4vw]'>
            {/*  IMAGE  */}
            <div className=' w-full md:w-1/2 relative aspect-[16/10]'>
                <Image src={imageUrl} fill sizes='400px' className=' object-cover rounded-xl shadow-lg' alt={description} />
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
