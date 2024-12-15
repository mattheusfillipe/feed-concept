import { Heart, ChatCircleDots } from "@phosphor-icons/react"
import { formatDistance } from "date-fns"
import { ptBR } from 'date-fns/locale'
import { useState } from "react"

export function PostList({ posts }) {
    return (
        <div>
            {posts.map((post) => (
                <PostItem key={post.id} post={post} />
            ))}
        </div>
    )
}

function PostItem({ post }) {
    const [isFilled, setIsFilled] = useState(false)
    const [isCommenting, setIsCommenting] = useState(false)
    const [comment, setComment] = useState('')
    const [comments, setComments] = useState(post.comments || [])

    const handleLikeToggle = () => {
        setIsFilled(!isFilled)
    }

    const handleNewComment = () => {
        setIsCommenting(!isCommenting)
    }

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

            // Adiciona o novo comentário à lista de comentários
            setComments([newComment, ...comments])

            // Limpa o campo de comentário e fecha a área de comentário
            setComment('')
            setIsCommenting(false)
        }
    }



    return (
        <div className="bg-slate-800 rounded-xl p-4 text-slate-100 mt-4 flex justify-between w-full">
            <div className="flex items-start gap-4 mb-2">
                <img src={post.author.avatar} className="w-12 rounded-full" />
                <div className="w-full">
                    <p className="text-slate-100">{post.author.name}</p>
                    <p className="text-slate-500 text-sm">{post.author.socialLink}</p>
                    <p className="text-slate-100 mt-4 max-w-[600px]">{post.content}</p>
                    <div className="mt-4 flex gap-2">
                        <button onClick={handleLikeToggle}>
                            <Heart
                                size={20}
                                weight={isFilled ? "fill" : "regular"}
                                className={isFilled ? "text-red-500" : "text-slate-500"}
                            />
                        </button>

                        <button onClick={handleNewComment}>
                            <ChatCircleDots
                                size={20}
                            />
                        </button>
                    </div>
                    {isCommenting && (
                        <div className="flex gap-4 items-center mt-4">
                            <textarea
                                autoFocus
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                className="h-10 w-96 bg-slate-900 rounded-lg text-left resize-none py-2 px-3 text-slate-100"
                                placeholder="Pode comentar"
                            />
                            <button
                                disabled={!comment.trim()}
                                onClick={handlePublishComment}
                                className={`flex gap-2 items-center rounded-lg text-slate-100 px-3 py-2 transition-colors duration-200 
                                ${comment.trim() ? 'bg-blue-500 hover:bg-blue-800' : 'bg-slate-500 cursor-not-allowed'}`}>
                                Publicar
                            </button>

                        </div>
                    )}

                    {/* Renderização da lista de comentários */}
                    {comments.length > 0 && (
                        <div className="mt-4 space-y-2">
                            <h3 className="text-sm font-semibold text-slate-300">Comentários {comments.length}</h3>
                            {comments.map((comment) => (
                                <div key={comment.id} className="bg-slate-900 p-3 rounded-lg w-96">
                                    <div className="flex items-center gap-2 mb-1 w-full">
                                        <img 
                                            src={comment.author.avatar} 
                                            className="w-6 h-6 rounded-full" 
                                        />
                                        <p className="text-xs text-slate-300">{comment.author.name}</p>
                                    </div>
                                    <p className="text-sm text-slate-100 mt-2">{comment.content}</p>
                                    <time className="text-xs text-slate-500 block mt-2">
                                        {formatDistance(comment.date, new Date(), { locale: ptBR, addSuffix: true })}
                                    </time>
                                </div>
                            ))}
                        </div>
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