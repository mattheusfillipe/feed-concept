import React from 'react'
import { CommentItem } from './CommentItem'

export function CommentList({ comments }) {
    return (
        <div className="mt-4 space-y-2">
            <h3 className="text-sm font-semibold text-slate-300">
                Comentários {comments.length}
            </h3>
            {comments.map((comment) => (
                <CommentItem key={comment.id} comment={comment} />
            ))}
        </div>
    )
}