import React from "react"

type Props = {
    children: React.ReactNode,
    type?: "button" | "submit" | "reset",
    onClick?: () => void
}
export default function Button({children, type, onClick}: Props) {

    return (
        <button
            className="w-full bg-sky-500 hover:bg-sky-400 text-white py-2 rounded"
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

