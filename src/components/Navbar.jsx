import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
    return (
        <div className="p-4 bg-[#c0c1c7]">
            <div className="flex justify-between items-center w-full p-3 bg-[#24252a] rounded-2xl">
                <Link href="/">
                    <Image src="/logo.png" width={100} height={20} alt="Logo" />
                </Link>
                <div className="flex gap-6">
                    <Link href="/">Memegen</Link>
                    <Link href="/">AI sm</Link>
                    <Link href="/">Search?</Link>
                </div>
                <div className="bg-[#018aa7] p-2 rounded-xl text-white">dkls</div>
            </div>
        </div>
    )
}

export default Navbar
