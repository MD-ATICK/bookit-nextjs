"use client"

import { sendEmail } from "@/lib/actions/sendMail";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function ContactForm() {

    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     message: '',
    // });

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.value,
    //     });
    // };

    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget
        setIsLoading(true)
        const formData = new FormData(form)
        const data = await sendEmail(formData)
        console.log({ data })
        if (data?.success) {
            form.reset()
            toast('Successfully Mail Sent.', { style: { backgroundColor: 'green' , borderWidth : '0px' } })
        }
        if (data?.error) {
            toast(data.error, { style: { backgroundColor: 'red' ,borderWidth : '0px'} })
        }
        setIsLoading(false)
    };
    return (

        <form onSubmit={handleSubmit} className="space-y-8">
            <div>
                <label htmlFor="name" className="block text-lg lg:text-2xl mb-2">
                    Name
                </label>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    disabled={isLoading}
                    className=" "
                    // value={formData.name}
                    // onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-lg lg:text-xl mb-2">
                    Email
                </label>
                <Input
                    type="email"
                    id="email"
                    name="email"
                    disabled={isLoading}
                    // value={formData.email}
                    // onChange={handleChange}
                    className=" "
                    required
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-lg lg:text-2xl mb-2">
                    Message
                </label>
                <Textarea
                    id="message"
                    name="message"
                    // value={formData.message}
                    // onChange={handleChange}
                    rows={5}
                    disabled={isLoading}
                    className=" "
                    required
                />
            </div>

            <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white h-14 py-4 rounded-lg text-xl lg:text-2xl font-semibold hover:bg-blue-700 transition"
            >
                {
                    isLoading ? <ClipLoader color="white" size={25} /> : 'Send Message'
                }
            </Button>
        </form>

    )
}
