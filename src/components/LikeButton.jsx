import React from 'react'
import { Heart } from "@phosphor-icons/react"

export function LikeButton({ isFilled, onClick }) {
    return (
        <button onClick={onClick}>
            <Heart
                size={20}
                weight={isFilled ? "fill" : "regular"}
                className={isFilled ? "text-red-500" : "text-slate-500"}
            />
        </button>
    )
}