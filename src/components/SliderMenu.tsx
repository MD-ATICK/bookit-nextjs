
import menu from '@/assets/menu-white.png';
import Image from "next/image";
import Link from 'next/link';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";

export default function SliderMenu({ isAuthenticated, user }: { isAuthenticated: boolean, user: { id: string, labels: string[] } | undefined }) {


    return (
        <Sheet>
            <SheetTrigger className=' md:hidden '>
                <Image src={menu} height={35} alt="" className=' hover:bg-slate-900 border rounded-sm p-1' />
            </SheetTrigger>
            <SheetContent>
                <div className=" py-[5vh] h-screen flex flex-col justify-center items-center gap-6">
                    {/* <Link href={'/rooms'} >Rooms</Link> */}
                    {
                        isAuthenticated &&
                        <SheetClose asChild>
                            <Link href={'/bookings'} >Bookings</Link>
                        </SheetClose>
                    }
                    {

                        user && user?.labels.includes('admin') &&
                        <SheetClose asChild>
                            <Link href={'/add-room'} >Add Room</Link>
                        </SheetClose>
                    }
                    <SheetClose asChild>
                        <Link href={'/contact'} >Contact</Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link href={'/about-us'} >About Us</Link>
                    </SheetClose>
                </div>
            </SheetContent>
        </Sheet>
    )
}
