import Rooms from '@/components/Rooms'
import rooms from '@/data/rooms.json'

export default function RoomsPage() {
  return (
    <div className='   py-10'>
        <Rooms rooms={rooms} />
    </div>
  )
}
