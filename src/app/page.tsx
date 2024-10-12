import Rooms from "@/components/Rooms";
import rooms from '@/data/rooms.json';


export default function Home() {
  return (
    <div className="   px-[1vw] py-10">
      {rooms.length > 0 && <Rooms rooms={rooms} />}
      {rooms.length === 0 && <p className=' text-gray-300'> having no rooms!</p>}
    </div>
  );
}
