import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='  p-20'>
            <Link href={'/'} className=' font-medium text-sm text-gray-400'>back to home</Link>
        </div>
    )
}
