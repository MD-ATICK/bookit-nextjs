import { getAllRooms } from '@/actions/getAllRooms'
import Rooms from '@/components/Rooms'

export default async function RoomsPage() {


  const rooms = await getAllRooms()

  return (
    <div className='   py-10'>
      <Rooms rooms={rooms} />
    </div>
  )
}
