import AddRoomForm from "@/components/AddRoomForm";
import { checkAuth } from "@/lib/actions/checkAuth";

export default async function AddRoomPage() {
    
    const {user} = await checkAuth()

    if(!user || !user.labels.includes('admin')){
        return <p className=" p-5 text-sm">You don&apos;t have permission to add rooms!</p>  
    }

    return (
        <div className=" p-[3vw]">
            <h1 className=" font-semibold text-xl py-2 border-b-2 border-gray-800">Add a Room!</h1>
            <AddRoomForm />
        </div>
    )
}
