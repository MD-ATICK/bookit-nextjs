import MyRooms from "@/components/MyRooms"
import { getMyRooms } from "@/lib/actions/getMyRooms"

export default async function MyRoomsPage() {

    const rooms = await getMyRooms()

    return (
        <div>
            {rooms.length > 0 && <MyRooms rooms={rooms} />}
            {rooms.length === 0 && <p className=' text-gray-300'> having no rooms!</p>}
        </div>
    )
}
