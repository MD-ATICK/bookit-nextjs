import LoginForm from "@/components/LoginForm";


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
