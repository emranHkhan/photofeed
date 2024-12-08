"use client"
import Image from 'next/image'
import { useState } from 'react'

const LanguageSwitcher = () => {
    const [showSwitcher, setShowSwitcher] = useState(false)

    const handleClick = () => {
        setShowSwitcher(prev => !prev)
    }

    return (
        <div className="relative">
            <button className="flex items-center gap-2" onClick={handleClick}>
                <Image width={100} height={100} className="max-w-8" src="/bd.png" alt="bangla" />
            </button>

            {
                showSwitcher && (
                    <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white p-2 z-10 shadow-lg">
                        <li className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100">
                            <Image width={100} height={100} className="max-w-8" src="/bd.png" alt="bangla" />
                            Bangla
                        </li>
                        <li className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100">
                            <Image width={100} height={100} className="max-w-8" src="/usa.png" alt="english" />
                            English
                        </li>
                    </div>
                )
            }
        </div>
    )
}

export default LanguageSwitcher