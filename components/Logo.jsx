import Image from "next/image"
import Link from "next/link"

const Logo = () => {
    return (
        <Link href="/">
            <Image width={100} height={100} src="/lws_logo.png" className="max-w-[100px] md:max-w-[165px]" alt="Lws Logo" />
        </Link>
    )
}

export default Logo