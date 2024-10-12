import logo from '@/assets/calendar.png'
import Image from 'next/image'

export default function LogoBar() {
    return (
        <div className=' flex items-center gap-x-2'>
            <Image src={logo} width={40} alt='' />
            <h1 className=' font-bold text-2xl'>{process.env.NEXT_WEB_NAME}</h1>
        </div>
    )
}
