import React, { useState } from "react"
import { ChatCircleDots } from "@phosphor-icons/react"
import { formatDistance } from "date-fns"
import { ptBR } from 'date-fns/locale'

import { Avatar } from './Avatar'
import { LikeButton } from './LikeButton'
import { CommentInput } from './CommentInput'
import { CommentList } from './CommentList'

export function PostItem({ post }) {
    const [isFilled, setIsFilled] = useState(false)
    const [isCommenting, setIsCommenting] = useState(false)
    const [comment, setComment] = useState('')
    const [comments, setComments] = useState(post.comments || [])

    const handleLikeToggle = () => setIsFilled(!isFilled)
    const handleNewComment = () => setIsCommenting(!isCommenting)

    const handlePublishComment = () => {
        if (comment.trim()) {
            const newComment = {
                id: Date.now(),
                author: {
                    name: "Rocketseat",
                    avatar: "https://github.com/rocketseat.png" 
                },
                content: comment,
                date: new Date()
            }

            setComments([newComment, ...comments])
            setComment('')
            setIsCommenting(false)
        }
    }

    return (
        <div className="bg-slate-800 rounded-xl p-4 text-slate-100 mt-4 flex justify-between w-full">
            <div className="flex items-start gap-4 mb-2">
                <Avatar 
                    src={post.author.avatar} 
                    name={post.author.name} 
                />
                <div className="w-full">
                    <p className="text-slate-100">{post.author.name}</p>
                    <p className="text-slate-500 text-sm">{post.author.socialLink}</p>
                    <p className="text-slate-100 mt-4 max-w-[600px]">{post.content}</p>
                    
                    <div className="mt-4 flex gap-2">
                        <LikeButton 
                            isFilled={isFilled} 
                            onClick={handleLikeToggle} 
                        />
                        <button onClick={handleNewComment}>
                            <ChatCircleDots size={20} />
                        </button>
                    </div>

                    {isCommenting && (
                        <CommentInput 
                            comment={comment}
                            onCommentChange={(e) => setComment(e.target.value)}
                            onPublishComment={handlePublishComment}
                        />
                    )}

                    {comments.length > 0 && (
                        <CommentList comments={comments} />
                    )}
                </div>
            </div>
            <time
                title={post.formattedDate}
                className="text-sm text-slate-500"
            >
                {formatDistance(post.date, new Date(), { locale: ptBR, addSuffix: true })}
            </time>
        </div>
    )
}