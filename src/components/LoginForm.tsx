"use client"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createSession } from "@/lib/actions/createSession";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { ClipLoader } from 'react-spinners';
import { Button } from "./ui/button";

export default function LoginForm() {


    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setLoginData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError('')
        setIsLoading(true)
        const data = await createSession(loginData)
        setIsLoading(false)
        if (data.success) {
            router.push('/')
        }
        setError(data?.error ?? '')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className=" py-2 space-y-2">
                <Label>Email</Label>
                <Input disabled={isLoading} id="email" name="email" value={loginData.email} onChange={handleInputChange} placeholder="atick@gmail.com" type="email" />
            </div>
            <div className=" py-2 space-y-2">
                <Label>Password</Label>
                <Input disabled={isLoading} id="password" name="password" value={loginData.password} onChange={handleInputChange} placeholder="atick1234" type="text" />
            </div>
            {
                error && <p className=" text-sm py-1 text-red-600 font-medium">{error}</p>
            }
            <br />
            <Button disabled={isLoading} type='submit' className=" w-full" variant={'outline'}>
                {
                    isLoading ?
                        <ClipLoader size={20} color="white" />
                        : 'Login'
                }
            </Button>

            <br /> <br />
            <Link href={'/register'} className=" text-sm font-medium">have not any account?register</Link>
        </form>
    )
}
