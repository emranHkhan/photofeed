"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

const Modal = ({ children }) => {
    const modalRef = useRef(null)
    const router = useRouter()

    useEffect(() => {
        if (!modalRef.current?.open) {
            modalRef.current?.showModal()
        }
    }, [])

    const onHide = () => {
        router.back()
    }

    return createPortal(
        <dialog className="shadow-lg border flex flex-col p-2 rounded-md" ref={modalRef} onClose={onHide}>
            <span onClick={onHide} className="flex justify-end cursor-pointer">
                <Image src={"/xmark.svg"} alt="close" width={30} height={30} />
            </span>
            <div className="mt-5">
                {children}
            </div>
        </dialog>,
        document.getElementById("modal-root-content")
    )
}

export default Modal