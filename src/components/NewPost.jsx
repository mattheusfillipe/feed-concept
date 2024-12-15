import { useState } from "react"
import { Code, Image, Calendar, PaperPlaneTilt } from "@phosphor-icons/react"
import { format } from "date-fns"
import { ptBR } from 'date-fns/locale';
import { PostList } from "./PostList";

export function NewPost() {
    const [text, setText] = useState('')
    const [posts, setPosts] = useState([])
    const [isFilled, setIsFilled] = useState(false)
    const handleLikeToggle = () => {
        setIsFilled(!isFilled)
    }

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    const handlePublish = () => {
        if (text.trim()) {
            const newPost = {
                id: Date.now(),
                content: text,
                date: new Date(),
                formattedDate: format(new Date(), "dd 'de' MMMM 'às' HH:mm", { locale: ptBR }),
                author: {
                    name: 'Matheus Fillipe',
                    socialLink: '@matheus.fillipe',
                    avatar: 'https://github.com/mattheusfillipe.png',
                },
            }

            setPosts([newPost, ...posts])
            setText('')
        }

    }

    return (
        <>
            {/* ÁREA DE PUBLICAÇÃO */}
            <div className='w-full h-auto bg-slate-800 rounded-xl p-4'>
                <div className="flex gap-4 items-start">
                    <img src="https://github.com/mattheusfillipe.png" alt="Profile Pic" className="w-16 rounded-full" />
                    <div className="w-full">
                        <textarea
                            placeholder="Fala, dev!"
                            className="h-16 bg-slate-900 rounded-lg w-full text-left resize-none py-2 px-3 text-slate-100"
                            value={text}
                            onChange={handleTextChange}
                        />
                        <div className="flex items-center justify-between mt-2">

                            <div className="flex gap-4">
                                <button
                                    className="flex gap-2 items-center bg-blue-500 rounded-full text-slate-100 px-3 py-2 hover:bg-blue-800 transition-colors duration-200 h-10 w-10">
                                    <Code weight="bold" />
                                </button>
                                <button
                                    className="flex gap-2 items-center bg-blue-500 rounded-full text-slate-100 px-3 py-2 hover:bg-blue-800 transition-colors duration-200 h-10 w-10">
                                    <Image weight="bold" />
                                </button>
                                <button
                                    className="flex gap-2 items-center bg-blue-500 rounded-full text-slate-100 px-3 py-2 hover:bg-blue-800 transition-colors duration-200 h-10 w-10">
                                    <Calendar weight="bold" />
                                </button>
                            </div>

                            <button
                                className={`flex gap-2 items-center rounded-lg text-slate-100 px-3 py-2 transition-colors duration-200 
                            ${text.trim() ? 'bg-blue-500 hover:bg-blue-800' : 'bg-slate-500 cursor-not-allowed'}`}
                                disabled={!text.trim()}
                                onClick={handlePublish}
                            >
                                <PaperPlaneTilt weight="bold" />Publicar
                            </button>

                        </div>
                    </div>
                </div>
            </div>
            {/* LISTA DE POSTS */}
            <PostList posts={posts} />
        </>
    )
}