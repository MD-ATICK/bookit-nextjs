import LoginForm from "@/components/LoginForm";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: `${process.env.NEXT_WEB_NAME} Login`,
    description: 'Access your Bookify account to manage bookings, view reservations, and find the best hotel deals. Secure and fast login to your favorite hotel booking platform.',
    keywords: ['bookify', `${process.env.NEXT_WEB_NAME} Login`, 'bookify login'],
    robots: {
        index: true, // Allow search engines to index the login page
        follow: true, // Follow links on this page
    },
    openGraph: {
        title: 'Login to Bookify | Hotel Booking Made Easy',
        description: 'Login to Bookify to access and manage your bookings with ease.',
        url: `${process.env.NEXT_DEPLOY_WEB_URL}/login`,
        siteName: 'Bookify',
        type: 'website',
    },
};


export default function LoginPage() {

    return (
        <div className=" px-[3vw] h-[calc(100vh-80px)] w-full text-black flex justify-center items-center">
            <div className=" max-w-[500px] bg-white space-y-4 p-6 rounded-xl w-full shadow-lg">
                <h1 className=" font-bold text-2xl">Login!</h1>
                <LoginForm />
            </div>
        </div>
    )
}
