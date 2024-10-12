import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import SignOutBtn from "./SignOutBtn";
import { Button } from "./ui/button";

export default function ActionsHeader() {
    const loggedIn = true;
    return (
        <div className=" flex items-center gap-3">
            <ModeToggle />

            {
                loggedIn &&
                <>
                    <Button>
                        <Link href={'/my-rooms'} className=" h-full w-full">My Rooms</Link>
                    </Button>
                    <SignOutBtn />
                </>
            }
            {
                !loggedIn &&
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
