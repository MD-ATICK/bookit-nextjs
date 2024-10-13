import SingleRoomDetails from '@/components/SingleRoomDetails'
import SingleRoomForm from '@/components/SingleRoomForm'
import { getSingleRoom } from '@/lib/actions/getSingleRoom'
import Link from 'next/link'

export default async function SingleRoom({ params }: { params: { id: string } }) {

    const room = await getSingleRoom(params.id)
    if (!room) return <p>no room found!</p>

    return (
        <div className=" py-6 space-y-4">
            <Link href={'/rooms'} className=" text-sm px-[2vw] font-medium ">Back to rooms</Link>
            <SingleRoomDetails room={room} />
            <SingleRoomForm id={room.$id} />
        </div>
    )
}
