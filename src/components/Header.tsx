
import ActionsHeader from './ActionsHeader'
import LogoBar from './LogoBar'
import Navbar from './Navbar'

export default function Header() {
    return (
        <header className=' h-20  sticky top-0 left-0 backdrop-blur-lg bg-[#08080883] z-10  px-2 border-b-2 border-gray-800 flex justify-between items-center '>
            {/* LOGO SECTION */}
            <LogoBar />
            {/* NAV SECTION */}
            <Navbar />
            {/* ACTIONS */}
            <ActionsHeader />
        </header>
    )
}
