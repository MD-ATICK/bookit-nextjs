import { room } from "@/types/type"
import RoomCard from "./RoomCard"

interface props {
    rooms: room[]
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
