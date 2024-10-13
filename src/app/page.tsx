import Rooms from "@/components/Rooms";
import { getAllRooms } from "@/lib/actions/getAllRooms";


export default async function Home() {
  const rooms = await getAllRooms()

  return (
    <div className="   px-[1vw] py-10">
      {rooms.length > 0 && <Rooms rooms={rooms} />}
      {rooms.length === 0 && <p className=' text-gray-300'> having no rooms!</p>}
    </div>
  );
}
