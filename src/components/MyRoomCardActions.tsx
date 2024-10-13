"use client"
import { deleteRoom } from "@/lib/actions/deleteRoom";
import Link from "next/link";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "sonner";
import { Button } from "./ui/button";


export default function MyRoomCardActions({ id }: { id: string }) {

    const [isLoading, setIsLoading] = useState(false);

    const handleDelete = async () => {
        setIsLoading(true)
        const data = await deleteRoom(id)
        if (data.success) {
            toast('Room deleted successfully', { style: { backgroundColor: 'green' } })
        }
        if (data.error) {
            toast(data.error, { style: { backgroundColor: 'red' } })
        }
        setIsLoading(false)

    }

    return (
        <div className='flex items-center justify-start gap-x-4'>
            <Link href={`/rooms/${id}`} className=''>
                <Button>
                    View
                </Button>
            </Link>
            <Button onClick={handleDelete} variant={'destructive'}>
                {
                    isLoading?
                        <ClipLoader color="white" size={20} />
                        :
                        'Delete'
                }
            </Button>
        </div>
    )
}
