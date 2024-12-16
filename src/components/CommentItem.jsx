import React from 'react'
import { formatDistance } from "date-fns"
import { ptBR } from 'date-fns/locale'
import { Avatar } from './Avatar'

export function CommentItem({ comment }) {
    return (
        <div className="bg-slate-900 p-3 rounded-lg w-96">
            <div className="flex items-center gap-2 mb-1 w-full">
                <Avatar 
                    src={comment.author.avatar} 
                    name={comment.author.name}
                    className="w-6 h-6 rounded-full"
                />
                <p className="text-xs text-slate-300">{comment.author.name}</p>
            </div>
            <p className="text-sm text-slate-100 mt-2">{comment.content}</p>
            <time className="text-xs text-slate-500 block mt-2">
                {formatDistance(comment.date, new Date(), { locale: ptBR, addSuffix: true })}
            </time>
        </div>
    )
}