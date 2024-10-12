import SingleRoomDetails from '@/components/SingleRoomDetails'
import SingleRoomForm from '@/components/SingleRoomForm'
import rooms from '@/data/rooms.json'
import Link from 'next/link'

export default function SingleRoom({ params }: { params: { id: string } }) {

    const room = rooms.find(room => room.id === params.id)

    if(!room) return <p>no room found!</p>

    return (
        <div className=" py-6 space-y-4">
            <Link href={'/rooms'} className=" text-sm px-[2vw] font-medium ">Back to rooms</Link>
             <SingleRoomDetails room={room} />
             <SingleRoomForm />
        </div>
    )
}
