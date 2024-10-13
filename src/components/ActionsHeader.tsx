import { checkAuth } from "@/lib/actions/checkAuth";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import SignOutBtn from "./SignOutBtn";
import { Button } from "./ui/button";

export default async function ActionsHeader() {
    const { isAuthenticated } = await checkAuth();

    return (
        <div className=" flex items-center gap-3">
            <ModeToggle />

            {
                isAuthenticated &&
                <>
                    <Button>
                        <Link href={'/my-rooms'} className=" h-full w-full">My Rooms</Link>
                    </Button>
                    <SignOutBtn />
                </>
            }
            {
                !isAuthenticated &&
                <>
                    <Button>
                        <Link href={'/login'} className=" h-full w-full">Login</Link>
                    </Button>
                    <Button>
                        <Link href={'/register'} className=" h-full w-full">Register</Link>
                    </Button>
                </>
            }
        </div>
    )
}
