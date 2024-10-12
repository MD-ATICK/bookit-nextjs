import logo from '@/assets/calendar.png'
import Image from 'next/image'
import Link from 'next/link'

export default function LogoBar() {
    return (
        <Link href={'/'} className=' flex items-center gap-x-2'>
            <Image src={logo} width={40} alt='' />
            <h1 className=' font-bold text-2xl'>{process.env.NEXT_WEB_NAME}</h1>
        </Link>
    )
}
