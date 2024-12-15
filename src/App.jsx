import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { NewPost } from './components/NewPost'
import './index.css'


export function App() {
  return (

    <div className='max-w-[70rem] h-auto mx-auto mb-4'>
      <Header />

      <div className='flex gap-4'>
        <aside>
          <Sidebar />
        </aside>
        <main className='w-full'>
          <NewPost />
        </main>
      </div>
    </div>
  )
}
