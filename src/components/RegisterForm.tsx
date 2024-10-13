"use client"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createUser } from "@/lib/actions/createUser";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "sonner";
import { Button } from "./ui/button";

export default function RegisterData() {


    const [registerData, setRegisterData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setRegisterData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError('')
        setIsLoading(true)
        const data = await createUser(registerData)
        if (data.success) {
            toast('successfully logged!', { style: { backgroundColor: 'green' } })
            router.push('/')
        }
        // setError(data?.error ?? '')
        if (data?.error) {
            toast(data.error, { style: { backgroundColor: 'red' } })
        }
        setIsLoading(false)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className=" py-2 space-y-1">
                <Label>Name</Label>
                <Input disabled={isLoading} id="name" name="name" value={registerData.name} onChange={handleInputChange} placeholder="John Due" type="name" />
            </div>
            <div className=" py-2 space-y-1">
                <Label>Email</Label>
                <Input disabled={isLoading} id="email" name="email" value={registerData.email} onChange={handleInputChange} placeholder="atick@gmail.com" type="email" />
            </div>
            <div className=" py-2 space-y-1">
                <Label>Password</Label>
                <Input disabled={isLoading} id="password" name="password" value={registerData.password} onChange={handleInputChange} placeholder="atick1234" type="text" />
            </div>
            <div className=" py-2 space-y-1">
                <Label>Confirm Password</Label>
                <Input disabled={isLoading} id="confirmPassword" name="confirmPassword" value={registerData.confirmPassword} onChange={handleInputChange} placeholder="********" type="password" />
            </div>
            {error && <p className=" text-sm py-1 text-red-600 font-medium">{error}</p>}
            {/* <br /> */}
            <Button disabled={isLoading} type='submit' className=" w-full" variant={'outline'}>
                {isLoading ? <ClipLoader color="white" size={20} /> : "Register"}
            </Button>

            <br /> <br />
            <Link href={'/login'} className=" text-sm font-medium">already have an account?login</Link>
        </form>
    )
}
