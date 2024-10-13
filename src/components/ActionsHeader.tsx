import { checkAuth } from "@/lib/actions/checkAuth";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import SignOutBtn from "./SignOutBtn";
import SliderMenu from "./SliderMenu";
import { Button } from "./ui/button";

export default async function ActionsHeader() {
    const { isAuthenticated, user } = await checkAuth();

    return (
        <div className=" flex items-center gap-3">
            <ModeToggle />
            <SliderMenu user={user} isAuthenticated={isAuthenticated} />
            {
                isAuthenticated && user?.labels.includes('admin') &&
                <>
                    <Link href={'/my-rooms'} className=" ">
                        <Button>
                            My Rooms
                        </Button>
                    </Link>
                    <SignOutBtn />
                </>
            }
            {
                !isAuthenticated &&
                <>
                    <Link href={'/login'} className=" ">
                        <Button>
                            Login
                        </Button>
                    </Link>
                    <Link href={'/register'} className=" ">
                        <Button>
                            Register
                        </Button>
                    </Link>
                </>
            }
        </div>
    )
}
