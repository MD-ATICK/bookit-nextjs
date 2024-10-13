import BookingRoomCard from "@/components/BookingRoomCard";
import { getMyBookings } from "@/lib/actions/getMyBooking";

export default async function BookingsPage() {


  const { myBookings } = await getMyBookings()

  if (!myBookings || myBookings?.length === 0) return <p>No bookings found!</p>;

  return (
    <div className="py-[4vw] px-[2vw] space-y-4">
      {myBookings.map((booking) =>
        <BookingRoomCard key={booking.$id} booking={booking} />
      )}
    </div>
  )
}
