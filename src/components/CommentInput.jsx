import React from 'react'

export function CommentInput({ 
    comment, 
    onCommentChange, 
    onPublishComment 
}) {
    return (
        <div className="flex gap-4 items-center mt-4">
            <textarea
                autoFocus
                value={comment}
                onChange={onCommentChange}
                className="h-10 w-96 bg-slate-900 rounded-lg text-left resize-none py-2 px-3 text-slate-100"
                placeholder="Pode comentar"
            />
            <button
                disabled={!comment.trim()}
                onClick={onPublishComment}
                className={`flex gap-2 items-center rounded-lg text-slate-100 px-3 py-2 transition-colors duration-200 
                ${comment.trim() ? 'bg-blue-500 hover:bg-blue-800' : 'bg-slate-500 cursor-not-allowed'}`}>
                Publicar
            </button>
        </div>
    )
}