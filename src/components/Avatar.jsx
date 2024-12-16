import React from 'react'

export function Avatar({ src, name, className = "w-12 rounded-full" }) {
    return (
        <img 
            src={src} 
            alt={`Avatar de ${name}`} 
            className={className} 
        />
    )
}