import { checkAuth } from "@/lib/actions/checkAuth";
import Link from "next/link";

export default async function Navbar() {

  const { isAuthenticated, user } = await checkAuth()

  return (
    <div className=" hidden md:flex font-medium text-xs lg:text-sm justify-center items-center gap-3 lg:gap-6">
      {/* <Link href={'/rooms'} >Rooms</Link> */}
      {
        isAuthenticated &&
        <Link href={'/bookings'} >Bookings</Link>
      }
      {
        user?.labels.includes('admin') &&
        <Link href={'/add-room'} >Add Room</Link>
      }
      <Link href={'/contact'} >Contact</Link>
      <Link href={'/about-us'} >About Us</Link>
    </div>
  )
}
