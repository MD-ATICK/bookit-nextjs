import { Models } from "node-appwrite"
import RoomCard from "./RoomCard"

interface props {
    rooms: Models.Document[]
}

export default function Rooms({ rooms }: props) {
    return (
        <div className=' font-medium  gap-y-4 flex flex-col text-sm'>
            {
                rooms.map((room, index) => (
                    <RoomCard key={index} room={room} />
                ))
            }
        </div>
    )
}
