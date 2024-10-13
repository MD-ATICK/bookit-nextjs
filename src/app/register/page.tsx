import RegisterForm from "@/components/RegisterForm";


export default function RegisterPage() {
    return (
        <div className=" px-[3vw] h-[calc(100vh-80px)] w-full text-black flex justify-center items-center">
            <div className=" max-w-[500px] bg-white space-y-4 p-5 rounded-xl w-full shadow-lg">
                <h1 className=" font-bold text-2xl">Register!</h1>
                <RegisterForm />
            </div>
        </div>
    )
}
