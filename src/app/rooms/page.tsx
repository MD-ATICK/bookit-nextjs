import Rooms from '@/components/Rooms'
import { getAllRooms } from '@/lib/actions/getAllRooms'

export default async function RoomsPage() {


  const rooms = await getAllRooms()

  return (
    <div className='   py-10'>
      <Rooms rooms={rooms} />
    </div>
  )
}
