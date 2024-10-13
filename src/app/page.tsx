import Rooms from "@/components/Rooms";
import SkeletonRoomAndBooking from "@/components/SkeletonRoomAndBooking";
import { getAllRooms } from "@/lib/actions/getAllRooms";
import { Suspense } from "react";


export default async function Home() {
  const rooms = await getAllRooms()

  return (
    <div className="   px-[1vw] py-10">
      {rooms.length > 0 &&
        <Suspense fallback={<div className=" py-[3vw] w-full">
          <SkeletonRoomAndBooking />
        </div>}>
          <Rooms rooms={rooms} />
        </Suspense>
      }
      {rooms.length === 0 && <p className=' text-gray-300 text-sm font-medium py-[5vw]'> having no rooms!</p>}
    </div>
  );
}
