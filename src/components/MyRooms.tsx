import { Models } from "node-appwrite"
import MyRoomCard from "./MyRoomCard"

interface props {
    rooms: Models.Document[]
}
export default function MyRooms({ rooms }: props) {
    return (
        <div className=" py-[4vw] px-[2vw] space-y-6">
            {
                rooms.map((room, index) => (
                    <MyRoomCard key={index} room={room} />
                ))
            }
        </div>
    )
}
