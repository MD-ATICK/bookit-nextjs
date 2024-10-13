"use client"
import { destroySession } from "@/lib/actions/destroySession";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "sonner";
import { Button } from "./ui/button";

export default function SignOutBtn() {

    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false);

    const handleSignOut = async () => {
        // if (window.confirm('Are you sure you want to sign out?')) {
        setIsLoading(true)
        const data = await destroySession()
        setIsLoading(false)

        if (data.success) {
            toast('Signed out successfully!', { style: { backgroundColor: 'green' } })
            router.push('/login')
        }

        if (data.error) {
            toast(data.error, { style: { backgroundColor: 'red' } })
        }
        // }
    }




    return (
        <Button onClick={handleSignOut} variant={'destructive'}>
            {isLoading ? <ClipLoader size={20} color="white" /> : 'Sign Out'}
        </Button>
    )
}
