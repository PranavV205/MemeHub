import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
    return (
        <div className="p-4 bg-[#F5F5F5]">
            <div className="flex justify-between items-center w-full p-3 bg-white rounded-2xl">
                <Link href="/">
                    <h1 className='text-3xl bg-gradient-to-r from-[#6A35FF] to-[#FF3BFF] bg-clip-text text-transparent font-bold'>MEMEHUB</h1>
                </Link>
                <div className="flex gap-6 text-lg">
                    <Link href="/" className='bg-gradient-to-r from-[#6A35FF] to-[#FF3BFF] bg-clip-text text-transparent font-bold hover:text-[#2EE6D6]' >Memegen</Link>
                    <Link href="/" className='text-[#2D2D2D] hover:text-[#2EE6D6]'>AI sm</Link>
                    <Link href="/" className='text-[#2D2D2D] hover:text-[#2EE6D6]'>Search?</Link>
                </div>
                <div className="bg-gradient-to-r from-[#6A35FF] to-[#FF3BFF] p-2 rounded-xl text-white">Searchhhhh</div>
            </div>
        </div>
    )
}

export default Navbar
