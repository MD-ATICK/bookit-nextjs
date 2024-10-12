import Link from "next/link";

export default function Navbar() {
  return (
    <div className=" hidden sm:flex font-medium text-sm justify-center items-center gap-6">
      <Link href={'/rooms'} >Rooms</Link>
      <Link href={'/bookings'} >Bookings</Link>
      <Link href={'/add-room'} >Add Room</Link>
    </div>
  )
}
