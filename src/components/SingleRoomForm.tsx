"use client"
import { bookingRoom } from "@/lib/actions/bookingRoom";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";


export default function SingleRoomForm({ id }: { id: string }) {

    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        const formData = new FormData(e.currentTarget)
        const data = await bookingRoom(formData)
        setIsLoading(false)
        if (data?.success) {
            toast('successfully booking room.', { style: { backgroundColor: 'green' } })
            router.push('/bookings')
        }
        if (data?.error) {
            toast(data.error, { style: { backgroundColor: 'red' } })
        }

    }


    return (
        <form onSubmit={handleSubmit} className="flex flex-col p-[2vw] py-[4vw] gap-6">
            <div className=" flex flex-col md:flex-row items-center gap-3">
                <Input type="hidden" value={id} name="room_id" />
                <Input
                    disabled={isLoading}
                    type="date"
                    id="check_in_date"
                    name="check_in_date"
                    required={true}
                />
                <Input
                    disabled={isLoading}
                    type="time"
                    id="check_in_time"
                    name="check_in_time"
                    required={true}
                />
            </div>
            <div className=" flex flex-col md:flex-row items-center gap-3">
                <Input
                    disabled={isLoading}
                    type="date"
                    id="check_out_date"
                    name="check_out_date"
                    required={true}
                />
                <Input
                    disabled={isLoading}
                    type="time"
                    id="check_out_time"
                    name="check_out_time"
                    required={true}
                />
            </div>
            <Button disabled={isLoading} type="submit" className=" mt-[1vw]">
                {
                    isLoading ? <ClipLoader color="black" size={20} />
                        : 'Book A Room'
                }
            </Button>
        </form>
    )
}
